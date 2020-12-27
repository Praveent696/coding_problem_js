let scriptsPathToImport = [
    {
        path: "./scripts/coding_problem/bind.js",
        import: true
    },
    {
        path : "./scripts/coding_problem/flatten_n_level_obj.js",
        import: true
    },
    {
        path : "./scripts/coding_problem/n_sum.js",
        import: true
    },
    {
        path : "./scripts/coding_problem/zigzag_travasal_tree.js",
        import: true
    },
    {
        path : "./scripts/coding_problem/linked_list_sum.js",
        import: true
    },
    {
        path : "./scripts/coding_problem/two_sum_easy.js",
        import: true
    },
    {
        path : "./scripts/coding_problem/longest_substring_without_repeating_chars.js",
        import: true
    }
] 

scriptsPathToImport.filter(x => x.import).map(x => x.path).forEach(path => {
    let imported = document.createElement('script');
    imported.src = path;
    document.head.appendChild(imported);
});