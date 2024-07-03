use reqwest::Client;
use serde::Deserialize;
use worker::*;

#[derive(Debug, Deserialize)]
struct UserInfo {
    user: String,
    token: String,
    content: String,
}

pub fn init(router: Router<()>) -> Router<()> {
    let base = "/sms";

    router.get_async(base, sms)
}

async fn sms(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let query = req.query::<UserInfo>()?;
    // let user = ctx.param("user").ok_or("no user")?;
    // let token = ctx.param("token").ok_or("no token")?;
    // let content = ctx.param("content").ok_or("no content")?;

    let result = send_telegram_message(&query.user, &query.token, &query.content).await;

    match result {
        Ok(_) => Response::ok("ok"),
        Err(e) => Response::error(e.to_string(), 500),
    }
}

async fn send_telegram_message(token: &str, chat_id: &str, text: &str) -> Result<()> {
    let url = format!("https://api.telegram.org/bot{}/sendMessage", token);

    let client = Client::new();

    let params = [
        ("chat_id", chat_id),
        ("text", text),
        ("parse_mode", "MarkdownV2"),
    ];

    let response = client.post(&url).form(&params).send().await;

    match response {
        Ok(response) => {
            if response.status().is_success() {
                Ok(())
            } else {
                Err(response.text().await.unwrap().into())
            }
        }
        Err(e) => Err(e.to_string().into()),
    }
}

struct ContentWrapper {
    value: String,
}

impl ContentWrapper {
    fn new(value: String) -> Self {
        Self { value }
    }

    fn replace_symbol(&mut self) -> &mut Self {
        let replacements = [
            ("_", "\\_"),
            ("*", "\\*"),
            ("[", "\\["),
            ("]", "\\]"),
            ("(", "\\("),
            (")", "\\)"),
            ("~", "\\~"),
            ("`", "\\`"),
            (">", "\\>"),
            ("#", "\\#"),
            ("+", "\\+"),
            ("-", "\\-"),
            ("=", "\\="),
            ("|", "\\|"),
            ("{", "\\{"),
            ("}", "\\}"),
            (".", "\\."),
            ("!", "\\!"),
        ];

        for (from, to) in &replacements {
            self.value = self.value.replace(from, to);
        }

        self
    }

    fn replace_digit(&mut self) -> &mut Self {
        let digit_pattern = regex::Regex::new(r"\d").unwrap();
        self.value = digit_pattern.replace_all(&self.value, "`$1`").to_string();
        self
    }

    fn replace_link(&mut self) -> &mut Self {
        let link_pattern = regex::Regex::new(r"(https?|ftp):\/\/[\n\S]+").unwrap();
        self.value = link_pattern
            .replace_all(&self.value, "[$0]($0)")
            .to_string();
        self
    }

    fn to_string(&mut self) -> String {
        self.replace_symbol()
            .replace_digit()
            .replace_link()
            .value
            .clone()
    }
}
