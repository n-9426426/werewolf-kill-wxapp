import * as language from "@/language/zh-cn/index"

interface formatMassageParam {
  id: string;
}

export function formatMassage(obj: formatMassageParam) {
  return language.default[obj.id]
}