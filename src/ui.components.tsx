import ReactEcs, { Button, PositionUnit, UiEntity} from '@dcl/sdk/react-ecs'
import { Color4 } from "@dcl/sdk/math"


export const ButtonAction = ({ textLabel, callback }: { textLabel: string; callback: () => void | undefined }) => {
	return (
		<Button
			uiTransform={{
				width: "100%",
				height: 40,
				margin: 4,
				borderRadius: 8,
				borderColor: Color4.fromHexString("#508894"),
				borderWidth: 2
			}}
			value={textLabel}
			fontSize={14}
			onMouseDown={() => {
				callback!()
			}}
			uiBackground={{ color: Color4.fromHexString("#44727b") }}
		/>
	)
}