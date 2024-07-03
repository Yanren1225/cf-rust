use worker::*;

pub async fn route(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    print!("test");
    let router = Router::new();

    router.get_async("/test", test).run(req, ctx.env).await
}

async fn test(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    Response::ok(format!("test"))
}
