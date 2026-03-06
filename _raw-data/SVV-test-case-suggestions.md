# SV&V's Suggestions on how to write Test Case

**What is this document?** A quick start guide to try and help us standardize requirement copying into Jama and Test Case generation.

---

## Copying Requirement Over

1. Navigate to the SWRD repository.
2. If you do not have a Set of Requirements for your features, right click on SWRD and select **Add => New Item => Set of => Stakeholder Requirements**
3. Right click the new set of stakeholder requirements, select edit, and give it a better name.
4. Right click your new set of requirements, hover over **Add**, **New Item => Stakeholder Requirement**
5. In your new requirement, copy and paste the name of the GIT requirement into **NAME**
6. Copy and paste the description of the requirement into **Description** – keep in mind that photos will not copy over.
7. Copy and paste the Reason for your requirement into **Rationale**
8. Make sure to add the link to the original requirement. I've been adding it to the rationale.

   Example rationale:
   > To enable customization settings for each user.
   > ユーザーごとのカスタマイズ設定をできるようにするため

   Example link in rationale:
   > [Git Repository of Original Requirement Version 2.0](#)

9. Update your tags:
   - **SWRD**
   - The Feature you're working on (e.g. `LaneChange`)
   - The version of the SWRD (e.g. `SWRD v2`)
   - The smallest bucket the requirement is sorted into in GIT, found in the breadcrumbs at the top of the GIT requirement page. For example: `SWRD > PerceptionAndPlanning > Navigation > MapLinkLc > SWRD-PnP-LCA-NAV_MapLinkLc_130` → use the tag `MapLinkLc`

---

## Creating the Test Case

1. Go to the **SWQT** node and create a Set of Test Cases for your feature, following similar steps as outlined above.

2. Use this Wovey command (in the internal Woven chat on "all data sources by default") to get a consistent starting point for test cases:

   ```
   I will paste a software requirement below.
   For that requirement, generate at least one comprehensive test case with the following structure:
   1. Test case name
   2. Test case description
   3. Precondition (for the entire requirement) – a single precondition block
   4. Postcondition (for the entire requirement) – a single postcondition block
   5. Steps in a Markdown table with the columns:
      - Action
      - Expected result
      - Notes
   For the steps:
   - Use as many steps as necessary to fully cover the required behavior.
   - Each row must describe ONE step.
   - In "Action", describe exactly what the tester does or what input/state is applied.
   - In "Expected result", describe the system behavior and signal values using full sentences.
   - "Notes" is optional, but when present, explain the purpose of the step or what part of the requirement it verifies.
   - Do NOT include a "Step" column in the table.
   Write everything in clear, plain English, using the full wording you would normally use in a formal test description (no abbreviations like "prev" unless defined).
   Tell me how many test cases you generated at the top of your answer.
   Here is the requirement:
   <PASTE REQUIREMENT HERE>
   ```

3. **Make sure to read the test cases before starting to copy things in!!!** Wovey only seems to get me like 80% of the way there.

4. Once you're finished creating the test case, link it to the upstream requirement. Click **Relate to Existing**.

5. From the tree that appears on the right, select the requirement you just created. Don't be afraid to refresh your screen if it's not populated yet.

6. Make sure the relationship makes sense (test cases are **downstream** of requirements; requirements are **upstream** of test cases). This is easily fixed later so don't stress too much if you're confused.

7. Select the relationship as **Verify**

8. Add appropriate tags

Rinse and repeat!
