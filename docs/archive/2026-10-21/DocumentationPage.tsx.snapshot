import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { PaletteCard } from '../components/design/PaletteCard'

export function DocumentationPage() {
  const [clicks, setClicks] = useState(0)

  return (
    <div className="documentation">
      <section className="intro" aria-labelledby="docs-title">
        <p className="eyebrow">The building blocks</p>
        <h1 id="docs-title">Component guide.</h1>
        <p>Small, reusable pieces for your next design experiment. Explore their APIs and try them below.</p>
      </section>

      <section className="docs-section" aria-labelledby="layout-docs-title">
        <p className="eyebrow">Layout</p>
        <h2 id="layout-docs-title">LabLayout</h2>
        <p>The shared page shell wraps content in a header, navigation, main landmark, and footer. This page is a live example.</p>
        <p><code>src/components/layout/LabLayout.tsx</code></p>
        <dl className="prop-list">
          <div><dt>children: ReactNode</dt><dd>Required. The content rendered inside the main landmark.</dd></div>
          <div><dt>page?: 'lab' | 'docs'</dt><dd>Defaults to 'lab'. Marks the current navigation link with aria-current.</dd></div>
        </dl>
        <pre><code>{`import { LabLayout } from './components/layout/LabLayout'

<LabLayout page="docs">
  <h1>My experiment</h1>
</LabLayout>`}</code></pre>
        <p className="docs-note">Use one layout per page. App already provides the shell; do not nest another LabLayout inside it.</p>
      </section>

      <section className="docs-section" aria-labelledby="button-docs-title">
        <p className="eyebrow">UI primitive</p>
        <h2 id="button-docs-title">Button</h2>
        <p>A styled native button that accepts standard button props, including children, onClick, disabled, className, and ARIA attributes.</p>
        <p><code>src/components/ui/Button.tsx</code></p>
        <dl className="prop-list">
          <div><dt>type?: 'button' | 'submit' | 'reset'</dt><dd>Defaults to 'button' to avoid unintended form submission.</dd></div>
          <div><dt>className?: string</dt><dd>Adds classes alongside the base button class.</dd></div>
          <div><dt>disabled?: boolean</dt><dd>Uses native disabled behavior and a muted appearance.</dd></div>
        </dl>
        <div className="button-demo">
          <Button onClick={() => setClicks((count) => count + 1)}>Try the button</Button>
          <Button disabled>Disabled button</Button>
          <p role="status">Clicked {clicks} {clicks === 1 ? 'time' : 'times'}.</p>
        </div>
        <pre><code>{`import { Button } from './components/ui/Button'

<Button onClick={() => console.log('Clicked!')}>Try me</Button>
<Button disabled>Unavailable</Button>`}</code></pre>
        <p className="docs-note">Give every button a descriptive label. Keyboard users can activate it with Enter or Space.</p>
      </section>

      <section className="docs-section" aria-labelledby="palette-docs-title">
        <p className="eyebrow">Design experiment</p>
        <h2 id="palette-docs-title">PaletteCard</h2>
        <p>A self-contained interactive card. It accepts no props and cycles through Soft focus, Garden notes, and Golden hour before returning to the first palette.</p>
        <p><code>src/components/design/PaletteCard.tsx</code></p>
        <div className="docs-preview"><PaletteCard /></div>
        <pre><code>{`import { PaletteCard } from './components/design/PaletteCard'

<PaletteCard />`}</code></pre>
        <p className="docs-note">Each instance has independent state and a unique heading ID. Hex values provide text alternatives, and palette updates use a polite live region.</p>
      </section>
    </div>
  )
}
