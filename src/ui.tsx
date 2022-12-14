import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Text,
  TextboxNumeric,
  VerticalSpace,
  useWindowResize,
} from "@create-figma-plugin/ui";

// import { hsl2rgb } from "./helpers";
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { CloseHandler, CreateShapesHandler } from './types'

function Plugin() {
  // function onWindowResize(windowSize: { width: number; height: number }) {
  //   emit("RESIZE_WINDOW", windowSize);
  // }
  // useWindowResize(onWindowResize, {
  //   minWidth: 120,
  //   minHeight: 120,
  //   maxWidth: 500,
  //   maxHeight: 820,
  // });

  const [count, setCount] = useState<number | null>(5)
  const [countString, setCountString] = useState('5')
  
  const [hue, setHue] = useState<number | null>(0);
  const [hueString, setHueString] = useState("0");

  const [sat, setSat] = useState<number | null>(80);
  const [satString, setSatString] = useState("80");
  
  const [lig, setLig] = useState<number | null>(50);
  const [ligString, setLigString] = useState("50");


   const [hueDiff, setHueDiff] = useState<number | null>(5);
   const [hueDiffString, setHueDiffString] = useState("5");

   const [satDiff, setSatDiff] = useState<number | null>(0);
   const [satDiffString, setSatDiffString] = useState("0");

   const [ligDiff, setLigDiff] = useState<number | null>(0);
   const [ligDiffString, setLigDiffString] = useState("0");
  
  const handleCreateRectanglesButtonClick = useCallback(
    function () {
      if (count !== null) {
        emit<CreateShapesHandler>(
          "CREATE_SHAPES",
          count,
          hue,
          sat,
          lig,
          hueDiff,
          satDiff,
          ligDiff
        );
      }
    },
    [count, hue, sat, lig, hueDiff, satDiff, ligDiff]
  )
  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>('CLOSE')
  }, [])
  return (
    <Container space="large">
      <VerticalSpace space="large" />
      <Text>
        <Muted>Count</Muted>
      </Text>
      <VerticalSpace space="small" />
      <TextboxNumeric
        onNumericValueInput={setCount}
        onValueInput={setCountString}
        value={countString}
        variant="border"
      />

      <VerticalSpace space="small" />
      <Columns space="extraSmall">
        <div>
          <Text>
            <Muted>Hue Color</Muted>
          </Text>
          <VerticalSpace space="small" />

          <TextboxNumeric
            onNumericValueInput={setHue}
            onValueInput={setHueString}
            value={hueString}
            variant="border"
          />
        </div>

        <div>
          <Text>
            <Muted>Saturation Color</Muted>
          </Text>
          <VerticalSpace space="small" />

          <TextboxNumeric
            onNumericValueInput={setSat}
            onValueInput={setSatString}
            value={satString}
            variant="border"
          />
        </div>

        <div>
          <Text>
            <Muted>Lightness Color</Muted>
          </Text>
          <VerticalSpace space="small" />

          <TextboxNumeric
            onNumericValueInput={setLig}
            onValueInput={setLigString}
            value={ligString}
            variant="border"
          />
        </div>
      </Columns>

      <VerticalSpace space="small" />
      <Columns space="extraSmall">
        <div>
          <Text>
            <Muted>Hue Diff</Muted>
          </Text>
          <VerticalSpace space="small" />

          <TextboxNumeric
            onNumericValueInput={setHueDiff}
            onValueInput={setHueDiffString}
            value={hueDiffString}
            variant="border"
          />
        </div>

        <div>
          <Text>
            <Muted>Saturation Diff</Muted>
          </Text>
          <VerticalSpace space="small" />

          <TextboxNumeric
            onNumericValueInput={setSatDiff}
            onValueInput={setSatDiffString}
            value={satDiffString}
            variant="border"
          />
        </div>

        <div>
          <Text>
            <Muted>Lightness Diff</Muted>
          </Text>
          <VerticalSpace space="small" />

          <TextboxNumeric
            onNumericValueInput={setLigDiff}
            onValueInput={setLigDiffString}
            value={ligDiffString}
            variant="border"
          />
        </div>
      </Columns>

      <VerticalSpace space="extraLarge" />
      <Columns space="extraSmall">
        <Button fullWidth onClick={handleCreateRectanglesButtonClick}>
          Create
        </Button>
        <Button fullWidth onClick={handleCloseButtonClick} secondary>
          Close
        </Button>
      </Columns>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin)
