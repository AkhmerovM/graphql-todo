export type TSuccessResponse<T>= {
    success: true,
    data: T
}
export type TErrorResponse= {
    success: false,
    errors: []
}
