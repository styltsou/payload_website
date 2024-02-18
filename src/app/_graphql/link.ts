interface Args {
	disableAppearance?: true;
}

export const LINK_FIELDS = ({ disableAppearance }: Args = {}): string => `{
  label
  url
  type
  ${!disableAppearance ? 'appearance' : ''}
  newTab
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`;
