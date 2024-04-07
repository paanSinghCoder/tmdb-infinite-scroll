import { ContainerPropsType } from './Container.types'

export const Container = ({ children }: ContainerPropsType) => {
	return <div className="max-w-screen-2xl mx-auto px-2">{children}</div>
}
