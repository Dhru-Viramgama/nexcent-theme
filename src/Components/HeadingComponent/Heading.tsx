import React from 'react'

interface HeadingProps {
    heading: string,
    description?: string,
    [key: string]: any;
}

const Heading = (props: HeadingProps) => {
    const {
        heading,
        description,
        ...rest
    } = props;

    return (
        <div {...rest}>
            <h2 className='max-w-[542px] font-semibold text-neutral-d-grey text-3xl lg:text-4xl mx-auto text-center'>{heading}</h2>
            {description && <p className='max-w-[628px] text-neutral-grey mt-2 text-sm lg:text-base mx-auto text-center'>{description}</p>}
        </div>
    )
}

export default Heading
