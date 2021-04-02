---
id: WPF-ActivityLogger-Config
title: 📝Config
---

## Introduction

The Config file allows you to customize how the Activity Logger operates and
saves activities. This file can be found here:

```
C:\Users\[Username]\TMRosemite\ActivityLogger\Config.json
```

and looks something like this:

```json
{
  "IncludesProcessName": {
    "note": "Notepad"
  },
  "IsProcessName": {
    "devenv": "Microsoft​ Visual Studio",
    "idea64": "IntelliJ IDEA"
  },
  "IncludesWindowName": {
    "netflix": "Netflix"
  },
  "IsWindowName": {
    "fl studio 20": "FL Studio"
  },
  "IgnoreProcessName": [
    "ApplicationFrameHost",
    "task manager",
    "explorer",
    "Spotify"
  ],
  "DontUseFirebaseClient": true,
  "UserSecret": "85ZaiNuW2jfS5tUfQAyY"
}
```

### Config Structure

The Config has a few unique properties to archive different goals. The
properties: `IncludesProcessName`, `IsProcessName`, `IncludesWindowName` and
`IsWindowName` work the same but have differences.

#### General

The main goal of the Config is to give the end user more control over the naming
of the Activities. Here a small example:

Lets say we have Visual Studio IDE running for 10 minutes, which produces this
result.

![Result Image](https://i.imgur.com/DehIIKY.jpg)

Now this is not really helpful because we dont know what `devenv` really is. But
with the help of the Config we can solve this issue.
![Result Image](https://i.imgur.com/P7cBrX2.jpg) This is a lot more meaning full
than the previous result isn't it?

There are multiple ways to achieve this. One of them is by the `IsProcessName`
property.

[This is also explained here](https://rosemitedocs.web.app/docs/WPF-ActivityLogger-Config#isprocessname).

#### Important to note

- When changing to Config file. Make sure to restart the Activity Logger by
  opening the System Tray and selecting Restart. Or stopping and starting the
  app manually.

- The keys for these properties are `not case sensitive`. However the values
  are.

### Properties

Before discussing about the properties keep in mind the way `Includes...` and
`Is...` works the same for ProcessName and WindowName.

Let's take a closer look at each property of the Config file:

All the examples reflect on the example Config showed above.

#### IncludesProcessName

The `IncludesProcessName` property maps a process name that is included in a the
Config to its value. For Example: The incoming process name is `notepad++` then
gets mapped to `Notepad`.

#### IsProcessName

The `IsProcessName` property maps a process name to another name. In this
example the process name `devenv` is being mapped to `Microsoft​ Visual Studio`.

#### IncludesWindowName

The `IncludesWindowName` property works the same as IncludesProcessName but in
this case instead of ProcessName it's now WindowName.

#### IsWindowName

The `IsWindowName` property works the same as IsProcessName but in this case
instead of ProcessName it's now WindowName.

#### IgnoreProcessName

The `IgnoreProcessName` property makes sure to not save Activities which match
any name found in the list. For example if we have `Spotify` running, it doesn't
get saved to the to the Activities.

#### DontUseFirebaseClient

If this property is set to `true`, the Firebase Client won't be executed. This
is okay if you don't use the mobile. However if you do use it set this property
to `false`, else the app won't be able to update.

#### UserSecret

This Secret is being used for authenticating with the mobile app.

Make sure to keep this secret hidden. If you decide to reset your secret do the
following:

1. Delete the "UserSecret" property and make sure to not corrupt the json file.
2. Open the System Tray and select Restart Firebase Client.

After a few Seconds a new `secret` will be generated. Keep in mind that if you
use the Mobile app, to sign out and sign in with the new `secret`.
[For more Info about this here.](https://rosemitedocs.web.app/docs/WPF-ActivityLogger-Installation#mobile-installation)

Learn more about WPF-ActivityLogger:

- [GitHub Repo](https://github.com/SolomonRosemite/WPF-ActivityLogger/)
