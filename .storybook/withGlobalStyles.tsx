import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../../react-avancado-client/src/styles/global'

const WithGlobalStyles = (storyFn: StoryFn) => (
	<>
		<GlobalStyles />
		{storyFn()}
	</>
)

export default WithGlobalStyles
