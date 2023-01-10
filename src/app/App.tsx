import { getErrorMessage } from "utils/error" // eslint-disable-next-line
import Layout, { Page } from "components/layout" // eslint-disable-next-line
import { Banner, Content, Header, Actions } from "components/layout"

/* banner */
// eslint-disable-next-line
import NetworkName from "./sections/NetworkName"

/* header */
import IsClassicNetwork from "./sections/IsClassicNetwork"
import Refresh from "./sections/Refresh" // eslint-disable-next-line
import Preferences from "./sections/Preferences" // eslint-disable-next-line
import SelectTheme from "./sections/SelectTheme"
import ConnectWallet from "./sections/ConnectWallet"

/* routes */
import { useNav } from "./routes" // eslint-disable-next-line
import { ErrorBoundary, Wrong } from "components/feedback"

/* init */
// eslint-disable-next-line
import InitBankBalance from "./InitBankBalance"

/* extra */
import LatestTx from "./sections/LatestTx" // eslint-disable-next-line
import ValidatorButton from "./sections/ValidatorButton"
import DevTools from "./sections/DevTools"

const App = () => {
  // eslint-disable-next-line
  const { element: routes } = useNav()

  return (
    <Layout>
      <Banner>
        <NetworkName />
      </Banner>
      <Header>
        <IsClassicNetwork />

        <Actions>
          <DevTools />
          <section>
            <Refresh />
          </section>
          <ConnectWallet />
        </Actions>
        <LatestTx />
      </Header>
    </Layout>
  )
}

export default App

/* error */
export const fallback = (error: Error) => (
  <Wrong>{getErrorMessage(error)}</Wrong>
)
