export interface KanbanBoard<TCard extends Card> {
  columns: Column<TCard>[]
}
export interface Card {
  id: string | number
  title?: string
  description?: string
  content?: JSX.Element
  disableDrag?: boolean
}
export interface Column<TCard extends Card> {
  id: string | number
  title: string
  cards: TCard[]
}
