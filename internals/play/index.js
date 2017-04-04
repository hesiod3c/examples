const load = requireContext => requireContext.keys().map(requireContext);
load(require.context('../../shared/vue', true, /.play.js$/));
