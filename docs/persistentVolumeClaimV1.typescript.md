# `persistentVolumeClaimV1` Submodule <a name="`persistentVolumeClaimV1` Submodule" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolumeClaimV1 <a name="PersistentVolumeClaimV1" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1 kubernetes_persistent_volume_claim_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1(scope: Construct, id: string, config: PersistentVolumeClaimV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config">PersistentVolumeClaimV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config">PersistentVolumeClaimV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetWaitUntilBound">resetWaitUntilBound</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata"></a>

```typescript
public putMetadata(value: PersistentVolumeClaimV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec"></a>

```typescript
public putSpec(value: PersistentVolumeClaimV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts"></a>

```typescript
public putTimeouts(value: PersistentVolumeClaimV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitUntilBound` <a name="resetWaitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetWaitUntilBound"></a>

```typescript
public resetWaitUntilBound(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersistentVolumeClaimV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersistentVolumeClaimV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolumeClaimV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference">PersistentVolumeClaimV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference">PersistentVolumeClaimV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference">PersistentVolumeClaimV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBoundInput">waitUntilBoundInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBound">waitUntilBound</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeClaimV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference">PersistentVolumeClaimV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.spec"></a>

```typescript
public readonly spec: PersistentVolumeClaimV1SpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference">PersistentVolumeClaimV1SpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeClaimV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference">PersistentVolumeClaimV1TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: PersistentVolumeClaimV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.specInput"></a>

```typescript
public readonly specInput: PersistentVolumeClaimV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PersistentVolumeClaimV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

---

##### `waitUntilBoundInput`<sup>Optional</sup> <a name="waitUntilBoundInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBoundInput"></a>

```typescript
public readonly waitUntilBoundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `waitUntilBound`<sup>Required</sup> <a name="waitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBound"></a>

```typescript
public readonly waitUntilBound: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeClaimV1Config <a name="PersistentVolumeClaimV1Config" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimV1Config: persistentVolumeClaimV1.PersistentVolumeClaimV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.waitUntilBound">waitUntilBound</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeClaimV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#metadata PersistentVolumeClaimV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.spec"></a>

```typescript
public readonly spec: PersistentVolumeClaimV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#spec PersistentVolumeClaimV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeClaimV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#timeouts PersistentVolumeClaimV1#timeouts}

---

##### `waitUntilBound`<sup>Optional</sup> <a name="waitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.waitUntilBound"></a>

```typescript
public readonly waitUntilBound: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#wait_until_bound PersistentVolumeClaimV1#wait_until_bound}

---

### PersistentVolumeClaimV1Metadata <a name="PersistentVolumeClaimV1Metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimV1Metadata: persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#annotations PersistentVolumeClaimV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#generate_name PersistentVolumeClaimV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#labels PersistentVolumeClaimV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#name PersistentVolumeClaimV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#namespace PersistentVolumeClaimV1#namespace}

---

### PersistentVolumeClaimV1Spec <a name="PersistentVolumeClaimV1Spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimV1Spec: persistentVolumeClaimV1.PersistentVolumeClaimV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.accessModes">accessModes</a></code> | <code>string[]</code> | A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.storageClassName">storageClassName</a></code> | <code>string</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeMode">volumeMode</a></code> | <code>string</code> | Defines what type of volume is required by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeName">volumeName</a></code> | <code>string</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#access_modes PersistentVolumeClaimV1#access_modes}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.resources"></a>

```typescript
public readonly resources: PersistentVolumeClaimV1SpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#resources PersistentVolumeClaimV1#resources}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.selector"></a>

```typescript
public readonly selector: PersistentVolumeClaimV1SpecSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#selector PersistentVolumeClaimV1#selector}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#storage_class_name PersistentVolumeClaimV1#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

Defines what type of volume is required by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#volume_mode PersistentVolumeClaimV1#volume_mode}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#volume_name PersistentVolumeClaimV1#volume_name}

---

### PersistentVolumeClaimV1SpecResources <a name="PersistentVolumeClaimV1SpecResources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimV1SpecResources: persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | Map describing the minimum amount of compute resources required. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#limits PersistentVolumeClaimV1#limits}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map describing the minimum amount of compute resources required.

If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#requests PersistentVolumeClaimV1#requests}

---

### PersistentVolumeClaimV1SpecSelector <a name="PersistentVolumeClaimV1SpecSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimV1SpecSelector: persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | PersistentVolumeClaimV1SpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#match_expressions PersistentVolumeClaimV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#match_labels PersistentVolumeClaimV1#match_labels}

---

### PersistentVolumeClaimV1SpecSelectorMatchExpressions <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimV1SpecSelectorMatchExpressions: persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#key PersistentVolumeClaimV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#operator PersistentVolumeClaimV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#values PersistentVolumeClaimV1#values}

---

### PersistentVolumeClaimV1Timeouts <a name="PersistentVolumeClaimV1Timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeClaimV1Timeouts: persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#create PersistentVolumeClaimV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/persistent_volume_claim_v1#create PersistentVolumeClaimV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeClaimV1MetadataOutputReference <a name="PersistentVolumeClaimV1MetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---


### PersistentVolumeClaimV1SpecOutputReference <a name="PersistentVolumeClaimV1SpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResources` <a name="putResources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources"></a>

```typescript
public putResources(value: PersistentVolumeClaimV1SpecResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector"></a>

```typescript
public putSelector(value: PersistentVolumeClaimV1SpecSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetStorageClassName"></a>

```typescript
public resetStorageClassName(): void
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeMode"></a>

```typescript
public resetVolumeMode(): void
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeName"></a>

```typescript
public resetVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference">PersistentVolumeClaimV1SpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference">PersistentVolumeClaimV1SpecSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModesInput">accessModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selectorInput">selectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModes">accessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resources"></a>

```typescript
public readonly resources: PersistentVolumeClaimV1SpecResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference">PersistentVolumeClaimV1SpecResourcesOutputReference</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selector"></a>

```typescript
public readonly selector: PersistentVolumeClaimV1SpecSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference">PersistentVolumeClaimV1SpecSelectorOutputReference</a>

---

##### `accessModesInput`<sup>Optional</sup> <a name="accessModesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModesInput"></a>

```typescript
public readonly accessModesInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: PersistentVolumeClaimV1SpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: PersistentVolumeClaimV1SpecSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput"></a>

```typescript
public readonly storageClassNameInput: string;
```

- *Type:* string

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeModeInput"></a>

```typescript
public readonly volumeModeInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---


### PersistentVolumeClaimV1SpecResourcesOutputReference <a name="PersistentVolumeClaimV1SpecResourcesOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requestsInput">requestsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimV1SpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---


### PersistentVolumeClaimV1SpecSelectorMatchExpressionsList <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeClaimV1SpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

---


### PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeClaimV1SpecSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>

---


### PersistentVolumeClaimV1SpecSelectorOutputReference <a name="PersistentVolumeClaimV1SpecSelectorOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | PersistentVolumeClaimV1SpecSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList">PersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: PersistentVolumeClaimV1SpecSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList">PersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | PersistentVolumeClaimV1SpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions">PersistentVolumeClaimV1SpecSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeClaimV1SpecSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---


### PersistentVolumeClaimV1TimeoutsOutputReference <a name="PersistentVolumeClaimV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeClaimV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeClaimV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

---



