export const get = async () => {
    const url = `http://localhost:8080/download_apk?version=0.0.1`
    const res = await fetch(url)
    console.log("res inside get", res)
	return {
		headers: {},
		body: res.body
	}
  }