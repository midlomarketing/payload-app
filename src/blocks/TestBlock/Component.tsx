import type {TestBlock as TestBlockProps} from '@/payload-types'

type Props = {
  className?: string
} & TestBlockProps

export const TestBlock: React.FC<Props> = ({ className , testText}) => {
  return <p>{testText}</p>
}
