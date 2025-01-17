// TS util for typed Object.entries (https://www.reddit.com/r/typescript/comments/11dkbfx/comment/ja9ax0r/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

export type entryOf<o> = {
  [k in keyof o]-?: [k, Exclude<o[k], undefined>]
}[o extends readonly unknown[] ? keyof o & number : keyof o]

export type entriesOf<o extends object> = entryOf<o>[]

export const entriesOf = <o extends object>(o: o) =>
  Object.entries(o) as entriesOf<o>
