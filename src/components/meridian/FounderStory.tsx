import { ActionLink, ContentDialog } from './Shared'
import { asset } from './design'

export function FounderStory() {
  return (
    <div className="mb-founder-story">
      <img src={asset('gordon-zhang.jpeg')} alt="Gordon Zhang, founder of Meridian Bridge" width="800" height="800" loading="lazy" />
      <p>In 2023, I went to China for a routine trip back to see my wife’s family. While I was there, I went along with my wife to get a full body diagnostic check up, and found that I had chronic health issues I’d been carrying for years without knowing it. That one appointment changed how I take care of myself, permanently.</p>
      <p>Growing up in Canada, I assumed healthcare meant waiting for a referral and appointment for specialists with a 6+ month backlog. After this experience, I realized I can be <strong><em>proactive</em></strong> about my healthcare. Doing periodic comprehensive health screenings means I can adjust my lifestyle to avoid health problems, instead of trying to solve it after a serious diagnosis.</p>
      <p>Meridian Bridge was built to provide English speakers, like myself, access to high quality comprehensive screenings that are fast, convenient, and costs about the same as a single private screening in Western countries (including flight and hotel accommodations). It’s me offering you support and access to diagnostic services that gave me clarity and peace of mind, through personally vetted partners that offer a standard of service beyond what’s available at home.</p>
      <p className="mb-founder-signature">Gordon Zhang, Founder</p>
    </div>
  )
}

export function MeetGordon({ question = false }: { question?: boolean }) {
  return (
    <>
      {question && <p className="mb-meet-question">Who will be speaking to you?</p>}
      <h3>Meet Gordon</h3>
      <ContentDialog title="Gordon, the Founder" label="Read Gordon’s story" icon="e1e40.svg">
        <FounderStory />
        <ActionLink>Book a Free Consultation</ActionLink>
      </ContentDialog>
    </>
  )
}
