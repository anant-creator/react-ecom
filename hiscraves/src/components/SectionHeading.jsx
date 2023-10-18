
export default function SectionHeading(data) {
  const {heading} = data;
  return (
    <div className="heading-background mb-5">
        <h1 className='section-heading'>{heading}</h1>
    </div>
  )
}
