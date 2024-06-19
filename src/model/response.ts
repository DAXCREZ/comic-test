export interface ResponseComic {
  contents: string
  status: {
    url: string
    content_type: string
    http_code: number
    response_time: number
    content_length: number
  }
}
