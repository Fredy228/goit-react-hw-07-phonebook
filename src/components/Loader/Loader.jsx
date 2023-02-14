import { ProgressBar } from  'react-loader-spinner'
export const LoaderDelete = () => {
    return(
        <ProgressBar
        height="30"
        width="30"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#F4442E'
        barColor = '#51E5FF'
        />
    )
}