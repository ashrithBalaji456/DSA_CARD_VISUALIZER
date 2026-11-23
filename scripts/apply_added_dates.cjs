const fs = require('fs');
const path = require('path');

const visDates = {
  "3sum_visualizer.html": "2026-11-13",
  "4sum_visualizer.html": "2026-11-19",
  "anagram_algorithm_visualizer.html": "2026-11-09",
  "anagram_hashmap_visualizer.html": "2026-11-09",
  "array_rotation_playing_card_visualizer.html": "2026-11-09",
  "balanced_parentheses_stack_visualizer.html": "2026-11-09",
  "balanced_split_array_visualizer.html": "2026-11-09",
  "best_time_to_buy_and_sell_stock_visualizer.html": "2026-11-20",
  "binary_subarrays_with_sum_visualizer.html": "2026-11-23",
  "calculate_digit_sum_of_a_string_visualizer.html": "2026-11-19",
  "container_with_most_water_visualizer.html": "2026-11-19",
  "contains_duplicate_visualizer.html": "2026-11-09",
  "first_repeated_element_visualizer.html": "2026-11-09",
  "floyd_s_cycle_detection_visualizer.html": "2026-11-09",
  "four_sum_visualizer.html": "2026-11-19",
  "fractional_knapsack_visualizer.html": "2026-11-09",
  "greedy_coin_change_visualizer.html": "2026-11-09",
  "grid_reachability_bfs_visualizer.html": "2026-11-09",
  "group_anagrams_visualizer.html": "2026-11-09",
  "jump_game_visualizer.html": "2026-11-09",
  "k_closest_points_to_origin_visualizer.html": "2026-11-09",
  "longest_consecutive_sequence_visualizer.html": "2026-11-09",
  "longest_distinct_subarray_visualizer.html": "2026-11-09",
  "longest_equal_run_playing_card_visualizer.html": "2026-11-09",
  "longest_repeating_character_replacement_visualizer.html": "2026-11-20",
  "longest_substring_without_repeating_characters_visualizer.html": "2026-11-20",
  "longest_substring_with_at_most_k_distinct_characters_visualizer.html": "2026-11-22",
  "majority_element_ii_visualizer.html": "2026-11-09",
  "majority_element_visualizer.html": "2026-11-09",
  "maximum_size_subarray_sum_equals_k.html": "2026-11-10",
  "max_consecutive_ones_iii_visualizer.html": "2026-11-22",
  "max_inventory_increase_visualizer.html": "2026-11-09",
  "max_meetings_visualizer.html": "2026-11-09",
  "meeting_overlap_visualizer.html": "2026-11-09",
  "merge_two_sorted_arrays_without_extra_space_visualizer.html": "2026-11-19",
  "middle_of_the_linked_list_visualizer.html": "2026-11-09",
  "minimum_arrows_to_burst_balloons_visualizer.html": "2026-11-09",
  "minimum_window_substring_visualizer.html": "2026-11-20",
  "minstack_dual_stack_visualizer.html": "2026-11-09",
  "min_moves_to_equal_elements_visualizer.html": "2026-11-09",
  "next_greater_element_visualizer.html": "2026-11-09",
  "next_permutation_visualizer.html": "2026-11-19",
  "number_of_substrings_containing_all_three_characters_visualizer.html": "2026-11-23",
  "permutation_in_string_visualizer.html": "2026-11-20",
  "prefix_sum_array_visualizer.html": "2026-11-09",
  "product_of_array_except_self_visualizer.html": "2026-11-09",
  "queue_using_two_stacks_visualizer.html": "2026-11-09",
  "railway_platforms_visualizer.html": "2026-11-09",
  "remove_duplicates_linked_list_visualizer.html": "2026-11-09",
  "reverse_pairs_visualizer.html": "2026-11-09",
  "same_frequencies_hashmap_visualizer.html": "2026-11-09",
  "second_largest_playing_card_visualizer.html": "2026-11-09",
  "sliding_window_maximum_visualizer.html": "2026-11-20",
  "sort_colors_visualizer.html": "2026-11-19",
  "subarray_sum_equals_k.html": "2026-11-10",
  "three_sum_visualizer.html": "2026-11-13",
  "top_k_frequent_elements_visualizer.html": "2026-11-09",
  "trapping_rain_water_visualizer.html": "2026-11-19",
  "two_sum_glassmorphic_visualizer.html": "2026-11-09",
  "two_sum_ii_visualizer.html": "2026-11-19",
  "two_sum_visualizer.html": "2026-11-09",
  "valid_anagram_visualizer.html": "2026-11-09",
  "valid_palindrome_visualizer.html": "2026-11-19",
  "valid_sudoku_visualizer.html": "2026-11-09"
};

// Read generate_problems.cjs
const genPath = path.join(__dirname, 'generate_problems.cjs');
let code = fs.readFileSync(genPath, 'utf8');

// For each problem in generate_problems.cjs, ensure addedDate is set
// We can use AST or regex replacement on each "visualizerUrl": "..."
code = code.replace(/"visualizerUrl":\s*"([^"]+)",/g, (match, visUrl) => {
  const filename = visUrl.replace('/visualizers/', '');
  const date = visDates[filename] || '2026-11-09';
  return `"visualizerUrl": "${visUrl}",\n    "addedDate": "${date}",`;
});

fs.writeFileSync(genPath, code, 'utf8');
console.log('Successfully updated generate_problems.cjs with addedDate fields.');
