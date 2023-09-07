interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h3 className='bg-primary rounded-lg h-fit text-white uppercase text-center font-bold shadow-[0px_10px_10px_0px_rgba(0,_0,_0,_0.10)] py-3 mb-6 text-xl'>{title}</h3>
  )
}
