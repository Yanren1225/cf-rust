use worker::*;

mod hello;
mod msg;
mod on;

mod routes;
mod types;

#[event(fetch)]
async fn main(req: Request, env: Env, ctx: Context) -> Result<Response> {
    let mut router = Router::new();

    router = routes::sms::init(router);

    router
        .get_async("/", hello::hello)
        .get_async("/msg", msg::send_msg)
        .on_async("/test", on::route)
        .run(req, env)
        .await
}
