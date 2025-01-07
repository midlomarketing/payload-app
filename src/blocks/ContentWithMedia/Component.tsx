import type { ContentWithMedia as ContentWithMediaProps } from '@/payload-types'
import Image from 'next/image'

type Props = {
  className?: string
} & ContentWithMediaProps

export const ContentWithMedia: React.FC<Props> = (block) => {
  if (block.textPosition === 'Left') {
    return <section>
      {block.content && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
      {block.image && typeof block.image !== 'string' &&
        <Image src={block.image.thumbnailURL || ``} alt={block.image.alt || ``}
        width={block.image.width || 640} height={block.image.height || 360}
        />}
    </section>
  } else if (block.textPosition === 'Right') {
    return <section>
      {block.image && typeof block.image !== 'string' &&
        <Image src={block.image.thumbnailURL || ``} alt={block.image.alt || ``}
        width={block.image.width || 640} height={block.image.height || 360}
        />}
      {block.content && <div dangerouslySetInnerHTML={{ __html: block.content }} />}
    </section>
  }
}