import { triggerSceneEmote } from '~system/RestrictedActions'
import { SetupUI } from './ui'

export function main() {
	SetupUI()
}

export function triggerEmote(src: string) {
	console.log(`Triggering emote: ${src}`)
	triggerSceneEmote({
		src: src,
		loop: false
	})
}
