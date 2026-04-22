import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'

import { TriggerEmotes } from 'src/ui.triggerEmotes'

// MARK: Main
const uiComponent = () => [
	TriggerEmotes(),
]

export function SetupUI() {
	ReactEcsRenderer.setUiRenderer(uiComponent)
}
