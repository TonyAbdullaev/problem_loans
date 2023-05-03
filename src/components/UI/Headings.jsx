export const Heading = ({size, bold, children}) => {
    const classNames = `m-2 ${size} ${bold}  leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white`;
    return (
        <h1 className={classNames}>{children}</h1>
    )
}