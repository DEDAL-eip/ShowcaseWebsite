export const get = async () => {
  const url = `http://localhost:8080/get_apk_list`
  const res = await fetch(url)
  const data = await res.json()

  return {
    body: {
      data: data
    }
  }
}