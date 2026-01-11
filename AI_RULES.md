# 🤖 AI Assistant Rules & Constraints

**CRITICAL INSTRUCTION FOR ALL AI AGENTS:**

To ensure the integrity of the Strategy Design vs. Code Implementation, the following rules **MUST** be followed strictly.

## 🔒 READ-ONLY ZONES (Reference Only)
The following files and directories define the "Strategy" and should **NEVER** be modified unless explicitly requested by the user to "Update the Strategy Rules".

*   ❌ `IMPLEMENTATION_PLAN.md`
*   ❌ `README.md`
*   ❌ `docs/` (all files)
*   ❌ `config/` (all files)
*   ❌ `alerts/` (all files)

## ✏️ WRITABLE ZONES (Implementation)
All code generation, modifications, and debugging must happen **ONLY** within these directories:

*   ✅ `pinescript/` (Code)
*   ✅ `analysis/` (Python tools)

## 💡 Workflow Logic
1.  **Read** from `docs/` or `config/` to understand requirements.
2.  **Write** code to `pinescript/` to implement those requirements.
3.  **Do not** update checkmarks in the `IMPLEMENTATION_PLAN.md`. Use a local scratchpad or memory to track progress.

---
*Created: January 2026*
