use reqwest::Client;
use worker::*;

pub async fn send_msg(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    let msg = ctx.param("msg");

    // if msg.is_none() {
    //     return Response::error("msg is none", 400);
    // }

    let result = send_telegram_message(
        "5197773761:AAEEj5RYk4GfRTjPLEFtIbt9AP70046bNs8",
        "492496799",
        "msg",
    )
    .await;

    match result {
        Ok(_) => Response::ok("ok"),
        Err(e) => Err(e),
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
                Err("不行".into())
            }
        }
        Err(e) => Err(e.to_string().into()),
    }
}
