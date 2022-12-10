import { ErrorLink, ErrorText } from 'NotFoundPage';

export default function NotFoundPage(params) {
  return (
    <ErrorText>
      This page was not found, please return to
      <ErrorLink to="/">Home page</ErrorLink>
    </ErrorText>
  );
}
