export type LandingPageProps = {
  data: {
    attributes: {
      logo: {
        data: {
          attributes: {
            alternativeText: string
            url: string
          }
        }
      }
    }
  }
}
