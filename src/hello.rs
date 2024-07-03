use worker::*;

pub async fn hello(req: Request, ctx: RouteContext<()>) -> Result<Response> {
    Response::ok("Hello, World!")
}
