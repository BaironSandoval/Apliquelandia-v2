export const sendWhatsApp = (phone: string, message?: string) => {

  const text = message ? `?text=${encodeURIComponent(message)}` : ""

  const url = `https://wa.me/${phone}${text}`

  window.open(url, "_blank")

}