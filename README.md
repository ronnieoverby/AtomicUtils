# AtomicUtils
Utilities for Atomic Amplifire

## Release of Liability
I am not responsible for any damage that is caused by the use of this software. Use at your own risk.

## Download
Head to the releases page and pick the best build for you. https://github.com/ronnieoverby/AtomicUtils/releases

  - win.zip : windows executable + dependencies
  - osx.zip : osx executable + dependencies
  - portable.zip : portable executable (requires dotnet core to be pre-installed)

## Usage

### Packaging Presets
This example packs a directory and an additional file preset skipping the first 10 Amplifire slots:
```
AtomicUtils pack -t MyPackage.abu -d Path/To/TonsOfPresets -f OneMorePreset.pre -o 10
```
You can specifiy as many -d and -f options as you like.

### Set Every Preset
This example takes a preset file `Default.pre` and packages it into an abu file at every slot.
This is useful for clearing out the Amplifire totally.
```
AtomicUtils setall -t Blank.abu -f Default.pre
```


### Extract .cab from preset
This example takes a preset file `somePresetWithEmbeddedCab.pre` and pulls out the cabinet impulse response data into a standalone .cab file `extracted.cab`.
```
AtomicUtils extract-cab -f somePresetWithEmbeddedCab.pre -t extract.cab
```
