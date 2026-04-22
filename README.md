# Bug Report: `triggerSceneEmote` Not Working

Minimal reproduction scene for a bug with `triggerSceneEmote` from `~system/RestrictedActions` in Decentraland SDK7.

## The Problem

Calling `triggerSceneEmote` with bundled `.glb` emote files does not play the emote correctly. Instead of the full animation, the player briefly sinks into the ground and pops back up, and props do not move.

These same emotes work correctly in the Builder/Creator Hub and in a deployed live scene.

## How to Reproduce

1. Open the project in the Creator Hub and launch the scene.
2. Click any of the emote buttons on the left side panel.

**Expected:** The avatar plays the emote animation with props.

**Actual:** The avatar briefly dips into the ground and snaps back. Props remain static.

## Help Needed

If you can run this scene, please report back:

- Do the emotes play correctly on your client?
- What client version and OS are you on?

This will help determine whether the issue is local to my setup or a broader bug.
