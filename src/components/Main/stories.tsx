import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
	title: 'Main',
	component: Main,
	decorators: [withKnobs]
}

export const Basic = () => (
	<Main
		title={text('Text', 'React Avançado')}
		description={text('Description', 'TypeScript, NextJS e Styled Components')}
	/>
)
