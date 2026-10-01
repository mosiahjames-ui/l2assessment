/**
 * Recommendation Templates - Maps categories to recommended actions
 */

const actionTemplates = {
  Billing: "Review the relevant invoice or payment details and explain the next steps.",
  Technical: "Gather reproduction details and investigate the reported behavior.",
  Account: "Verify the customer's account access and help restore it.",
  General: "Answer the question or direct the customer to the relevant help resource."
}

/**
 * Get recommended action for a given category
 * 
 * @param {string} category - The message category
 * @returns {string} - Recommended next step
 */
export function getRecommendedAction(category) {
  return actionTemplates[category] || "No recommendation available."
}

/**
 * Get all available categories
 * 
 * @returns {string[]} - List of categories
 */
export function getAvailableCategories() {
  return Object.keys(actionTemplates)
}

/**
 * Determines if message should be escalated
 * 
 * @param {string} category - The message category
 * @param {string} urgency - The urgency level
 * @param {string} message - The original message
 * @returns {boolean} - Whether to escalate
 */
export function shouldEscalate(category, urgency, message) {
  return message.length > 100
}
