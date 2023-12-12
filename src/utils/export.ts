import { toPng, toSvg } from "html-to-image";

export const exportImg =async (element: HTMLElement, fileName: string, format: string) => {
        if (format === "png") {
            const url = await toPng(element, {pixelRatio: 2})
            const link = document.createElement("a")
            link.href = url
            link.download = fileName
            link.click()
        } else if (format === "svg") {
            const url = await toSvg(element, {pixelRatio: 2})
            const link = document.createElement("a")
            link.href = url
            link.download = fileName
            link.click()
        }
}