# Migration `20200725172227`

This migration has been generated by gyash24x7 at 7/25/2020, 5:22:27 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "NoteColor" AS ENUM ('TRANSPARENT', 'VIOLET', 'INDIGO', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'RED', 'PINK');

ALTER TABLE "public"."Note" ADD COLUMN "color" "NoteColor" NOT NULL DEFAULT E'TRANSPARENT';
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200725171929..20200725172227
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -18,11 +18,24 @@
   notes    Note[] @relation("UserNotes")
 }
 model Note {
-  id       String  @default(cuid()) @id
+  id       String    @default(cuid()) @id
   title    String
   content  String
-  archived Boolean @default(false)
-  author   User    @relation("UserNotes", fields: [authorId], references: [id])
+  archived Boolean   @default(false)
+  color    NoteColor @default(TRANSPARENT)
+  author   User      @relation("UserNotes", fields: [authorId], references: [id])
   authorId String
 }
+
+enum NoteColor {
+  TRANSPARENT
+  VIOLET
+  INDIGO
+  BLUE
+  GREEN
+  YELLOW
+  ORANGE
+  RED
+  PINK
+}
```


