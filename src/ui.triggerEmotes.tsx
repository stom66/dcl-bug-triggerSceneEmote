import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'
import { Color4 } from '@dcl/sdk/math'
import { ButtonAction } from './ui.components'
import { triggerEmote } from 'src'


// MARK: UV Test UI
export function TriggerEmotes() {

	return (
		<UiEntity
			key = "ui_root"
			uiTransform={{
				width         : '100%',
				height        : '100%',
				flexDirection : 'column',
				alignItems    : 'center',
				justifyContent: 'center',
				positionType  : "absolute",
			}}
		>
			<UiEntity
				key = "ui_body"
				uiTransform={{
					display       : 'flex',
					width         : 220,
					height        : 420,
					flexDirection : 'column',
					alignItems    : 'center',
					justifyContent: 'space-between',
					borderRadius  : { topLeft: 8, topRight: 24, bottomLeft: 8,  bottomRight: 24 },
					padding       : { left   : 8, right   : 8,  bottom    : 20, top        : 20 },
					borderColor   : Color4.fromHexString("#4C9581FF"),
					borderWidth   : 3,
					positionType  : "absolute",
					position      : { left   : 64 }
				}}
				uiBackground={{ color: Color4.fromHexString("#4C958166") }}
			>
				<ButtonAction textLabel="Avatar Float"     callback={() => { triggerEmote('assets/emotes/Avatar_Float_NoProp_emote.glb') }} />
				<ButtonAction textLabel="Avatar Float 2"   callback={() => { triggerEmote('assets/emotes/Avatar_Float2_emote.glb')       }} />
				<ButtonAction textLabel="Birds"            callback={() => { triggerEmote('assets/emotes/Birds_emote.glb')               }} />
				<ButtonAction textLabel="Bean Bag Idle 1"  callback={() => { triggerEmote('assets/emotes/BeanBag_Idle_01_emote.glb')     }} />
				<ButtonAction textLabel="Bean Bag Idle 2"  callback={() => { triggerEmote('assets/emotes/BeanBag_Idle_02_emote.glb')     }} />
				<ButtonAction textLabel="Bowl"             callback={() => { triggerEmote('assets/emotes/Bowl_emote.glb')                }} />
				<ButtonAction textLabel="Watering Can"     callback={() => { triggerEmote('assets/emotes/WateringCan_emote.glb')         }} />
			</UiEntity>		
		</UiEntity>
	)
}
