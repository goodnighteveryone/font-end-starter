import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import '../assets/fonts/fangsong_GB2312-normal'
import autoTable from 'jspdf-autotable'

export const htmlToPDF = async (
  htmlId: string,
  title: string = '标题',
  description: string[][] = [
    ['大卫', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
  ],
  info: Array<string> = ['this is test', 'test'],
  bgColor = '#fff'
) => {
  const pdfDom = document.getElementById(htmlId) as HTMLElement
  pdfDom.style.padding = '0 10px !important'

  const A4Width = 595.28
  const A4Height = 841.89
  const scale = 2
  const imgHeight = 350
  const canvas = await html2canvas(pdfDom, {
    scale,
    useCORS: true,
    backgroundColor: bgColor,
  })
  // pdf生成日期
  const getTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()

    // 拼接成目标格式的字符串
    const formattedDateString = `${year}/${month}/${day}`
    return formattedDateString
  }
  const formattedDate = getTime()

  const imgWidth = (imgHeight / canvas.height) * canvas.width
  const pageHeight = (canvas.width / A4Width) * A4Height

  const PDF = new jsPDF('p', 'pt', 'a4')

  let leftHeight = imgHeight
  let position = 0
  const descriptionFontSize = 14
  const infoFontSize = 12

  while (leftHeight > 0) {
    if (position !== 0) PDF.addPage()
    const horizontalCenter = (A4Width - imgWidth) / 2
    // 将图片添加到 PDF 中
    PDF.addImage(
      canvas,
      'JPEG',
      horizontalCenter,
      position + 20,
      imgWidth,
      imgHeight
    )

    leftHeight -= pageHeight
    position -= A4Height
  }

  autoTable(PDF, {
    styles: { font: 'fangsong_GB2312', fontSize: descriptionFontSize },
    head: [['事件名称', '等级', '数量']],
    body: description,
    startY: imgHeight + 10,
  })

  // 插入文字描述 用户信息 时间信息
  PDF.setFont('fangsong_GB2312')
  PDF.setFontSize(infoFontSize)
  PDF.text(info, A4Width - 20, A4Height - 40, { align: 'right' })
  PDF.text(formattedDate, A4Width - 20, A4Height - 20, { align: 'right' })

  // // 添加标题到 PDF
  // PDF.setFontSize(16)
  // PDF.text(title, A4Width / 2, 40, { align: 'center' })

  PDF.save(`${title}.pdf`)
}
