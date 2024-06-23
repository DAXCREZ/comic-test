import type { Comic } from '../model/comic'
import type { ResponseComic } from '../model/response'

import { isNumber } from '../util/is-number'

const PROXY_URL = 'https://api.allorigins.win/get?url='
const AP_COMIC = (id: string) => `https://xkcd.com/${id}/info.0.json`

export const getComic = async (id: string): Promise<[Comic | null, unknown]> => {
  const isNumberId = isNumber(id)

  if (!isNumberId) {
    console.log('Id invalido')

    return [null, new Error('Id invalido')]
  }

  try {
    const response = await fetch(`${PROXY_URL}${AP_COMIC(id)}`)

    const data = (await response.json()) as ResponseComic

    const dataJson = JSON.parse(data.contents) as Comic

    return [dataJson, null]
  } catch (error) {
    return [null, 'Se produjo un error al obtener el comic']
  }
}
