type ArticleInfo = {
    year: number,
    text: string
}

export type SlideInfo = {
    title: string,
    start: number,
    end: number,
    articles: ArticleInfo[]
}