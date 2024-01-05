# `persistentVolumeClaim` Submodule <a name="`persistentVolumeClaim` Submodule" id="@cdktf/provider-kubernetes.persistentVolumeClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolumeClaim <a name="PersistentVolumeClaim" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim kubernetes_persistent_volume_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaim(scope: Construct, id: string, config: PersistentVolumeClaimConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig">PersistentVolumeClaimConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig">PersistentVolumeClaimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetWaitUntilBound">resetWaitUntilBound</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata"></a>

```typescript
public putMetadata(value: PersistentVolumeClaimMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec"></a>

```typescript
public putSpec(value: PersistentVolumeClaimSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putTimeouts"></a>

```typescript
public putTimeouts(value: PersistentVolumeClaimTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitUntilBound` <a name="resetWaitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.resetWaitUntilBound"></a>

```typescript
public resetWaitUntilBound(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PersistentVolumeClaim resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isConstruct"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

persistentVolumeClaim.PersistentVolumeClaim.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformElement"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

persistentVolumeClaim.PersistentVolumeClaim.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformResource"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

persistentVolumeClaim.PersistentVolumeClaim.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PersistentVolumeClaim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersistentVolumeClaim to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersistentVolumeClaim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolumeClaim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference">PersistentVolumeClaimMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference">PersistentVolumeClaimSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference">PersistentVolumeClaimTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBoundInput">waitUntilBoundInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBound">waitUntilBound</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeClaimMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference">PersistentVolumeClaimMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.spec"></a>

```typescript
public readonly spec: PersistentVolumeClaimSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference">PersistentVolumeClaimSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeClaimTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference">PersistentVolumeClaimTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.metadataInput"></a>

```typescript
public readonly metadataInput: PersistentVolumeClaimMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.specInput"></a>

```typescript
public readonly specInput: PersistentVolumeClaimSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PersistentVolumeClaimTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>

---

##### `waitUntilBoundInput`<sup>Optional</sup> <a name="waitUntilBoundInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBoundInput"></a>

```typescript
public readonly waitUntilBoundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `waitUntilBound`<sup>Required</sup> <a name="waitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.waitUntilBound"></a>

```typescript
public readonly waitUntilBound: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaim.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeClaimConfig <a name="PersistentVolumeClaimConfig" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimConfig: persistentVolumeClaim.PersistentVolumeClaimConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#id PersistentVolumeClaim#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.waitUntilBound">waitUntilBound</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeClaimMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#metadata PersistentVolumeClaim#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.spec"></a>

```typescript
public readonly spec: PersistentVolumeClaimSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#spec PersistentVolumeClaim#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#id PersistentVolumeClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeClaimTimeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#timeouts PersistentVolumeClaim#timeouts}

---

##### `waitUntilBound`<sup>Optional</sup> <a name="waitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimConfig.property.waitUntilBound"></a>

```typescript
public readonly waitUntilBound: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#wait_until_bound PersistentVolumeClaim#wait_until_bound}

---

### PersistentVolumeClaimMetadata <a name="PersistentVolumeClaimMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimMetadata: persistentVolumeClaim.PersistentVolumeClaimMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.name">name</a></code> | <code>string</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#annotations PersistentVolumeClaim#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#generate_name PersistentVolumeClaim#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#labels PersistentVolumeClaim#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#name PersistentVolumeClaim#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#namespace PersistentVolumeClaim#namespace}

---

### PersistentVolumeClaimSpec <a name="PersistentVolumeClaimSpec" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimSpec: persistentVolumeClaim.PersistentVolumeClaimSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.accessModes">accessModes</a></code> | <code>string[]</code> | A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.storageClassName">storageClassName</a></code> | <code>string</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.volumeMode">volumeMode</a></code> | <code>string</code> | Defines what type of volume is required by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.volumeName">volumeName</a></code> | <code>string</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#access_modes PersistentVolumeClaim#access_modes}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.resources"></a>

```typescript
public readonly resources: PersistentVolumeClaimSpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#resources PersistentVolumeClaim#resources}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.selector"></a>

```typescript
public readonly selector: PersistentVolumeClaimSpecSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#selector PersistentVolumeClaim#selector}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#storage_class_name PersistentVolumeClaim#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

Defines what type of volume is required by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#volume_mode PersistentVolumeClaim#volume_mode}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#volume_name PersistentVolumeClaim#volume_name}

---

### PersistentVolumeClaimSpecResources <a name="PersistentVolumeClaimSpecResources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimSpecResources: persistentVolumeClaim.PersistentVolumeClaimSpecResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | Map describing the minimum amount of compute resources required. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#limits PersistentVolumeClaim#limits}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map describing the minimum amount of compute resources required.

If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#requests PersistentVolumeClaim#requests}

---

### PersistentVolumeClaimSpecSelector <a name="PersistentVolumeClaimSpecSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimSpecSelector: persistentVolumeClaim.PersistentVolumeClaimSpecSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | PersistentVolumeClaimSpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#match_expressions PersistentVolumeClaim#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#match_labels PersistentVolumeClaim#match_labels}

---

### PersistentVolumeClaimSpecSelectorMatchExpressions <a name="PersistentVolumeClaimSpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimSpecSelectorMatchExpressions: persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#key PersistentVolumeClaim#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#operator PersistentVolumeClaim#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#values PersistentVolumeClaim#values}

---

### PersistentVolumeClaimTimeouts <a name="PersistentVolumeClaimTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimTimeouts: persistentVolumeClaim.PersistentVolumeClaimTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#create PersistentVolumeClaim#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim#create PersistentVolumeClaim#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeClaimMetadataOutputReference <a name="PersistentVolumeClaimMetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimMetadata">PersistentVolumeClaimMetadata</a>

---


### PersistentVolumeClaimSpecOutputReference <a name="PersistentVolumeClaimSpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResources` <a name="putResources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putResources"></a>

```typescript
public putResources(value: PersistentVolumeClaimSpecResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putSelector"></a>

```typescript
public putSelector(value: PersistentVolumeClaimSpecSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetStorageClassName"></a>

```typescript
public resetStorageClassName(): void
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetVolumeMode"></a>

```typescript
public resetVolumeMode(): void
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.resetVolumeName"></a>

```typescript
public resetVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference">PersistentVolumeClaimSpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference">PersistentVolumeClaimSpecSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModesInput">accessModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selectorInput">selectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModes">accessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resources"></a>

```typescript
public readonly resources: PersistentVolumeClaimSpecResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference">PersistentVolumeClaimSpecResourcesOutputReference</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selector"></a>

```typescript
public readonly selector: PersistentVolumeClaimSpecSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference">PersistentVolumeClaimSpecSelectorOutputReference</a>

---

##### `accessModesInput`<sup>Optional</sup> <a name="accessModesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModesInput"></a>

```typescript
public readonly accessModesInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: PersistentVolumeClaimSpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: PersistentVolumeClaimSpecSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassNameInput"></a>

```typescript
public readonly storageClassNameInput: string;
```

- *Type:* string

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeModeInput"></a>

```typescript
public readonly volumeModeInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimSpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpec">PersistentVolumeClaimSpec</a>

---


### PersistentVolumeClaimSpecResourcesOutputReference <a name="PersistentVolumeClaimSpecResourcesOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requestsInput">requestsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimSpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecResources">PersistentVolumeClaimSpecResources</a>

---


### PersistentVolumeClaimSpecSelectorMatchExpressionsList <a name="PersistentVolumeClaimSpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeClaimSpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

---


### PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference <a name="PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeClaimSpecSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>

---


### PersistentVolumeClaimSpecSelectorOutputReference <a name="PersistentVolumeClaimSpecSelectorOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | PersistentVolumeClaimSpecSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList">PersistentVolumeClaimSpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: PersistentVolumeClaimSpecSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressionsList">PersistentVolumeClaimSpecSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | PersistentVolumeClaimSpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorMatchExpressions">PersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimSpecSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimSpecSelector">PersistentVolumeClaimSpecSelector</a>

---


### PersistentVolumeClaimTimeoutsOutputReference <a name="PersistentVolumeClaimTimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaim } from '@cdktf/provider-kubernetes'

new persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeClaimTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaim.PersistentVolumeClaimTimeouts">PersistentVolumeClaimTimeouts</a>

---



