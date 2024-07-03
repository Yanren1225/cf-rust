pub struct BaseResponse<T> {
    status: u16,
    message: String,
    data: T,
}
