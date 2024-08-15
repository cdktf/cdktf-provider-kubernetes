# `persistentVolumeV1` Submodule <a name="`persistentVolumeV1` Submodule" id="@cdktf/provider-kubernetes.persistentVolumeV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolumeV1 <a name="PersistentVolumeV1" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1 kubernetes_persistent_volume_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1(scope: Construct, id: string, config: PersistentVolumeV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config">PersistentVolumeV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config">PersistentVolumeV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putMetadata"></a>

```typescript
public putMetadata(value: PersistentVolumeV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putSpec"></a>

```typescript
public putSpec(value: IResolvable | PersistentVolumeV1Spec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putTimeouts"></a>

```typescript
public putTimeouts(value: PersistentVolumeV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PersistentVolumeV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isConstruct"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

persistentVolumeV1.PersistentVolumeV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformElement"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

persistentVolumeV1.PersistentVolumeV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformResource"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

persistentVolumeV1.PersistentVolumeV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.generateConfigForImport"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

persistentVolumeV1.PersistentVolumeV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PersistentVolumeV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersistentVolumeV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersistentVolumeV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolumeV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference">PersistentVolumeV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList">PersistentVolumeV1SpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference">PersistentVolumeV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.specInput">specInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference">PersistentVolumeV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.spec"></a>

```typescript
public readonly spec: PersistentVolumeV1SpecList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList">PersistentVolumeV1SpecList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference">PersistentVolumeV1TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: PersistentVolumeV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | PersistentVolumeV1Spec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PersistentVolumeV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeV1Config <a name="PersistentVolumeV1Config" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1Config: persistentVolumeV1.PersistentVolumeV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.spec">spec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>[]</code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#id PersistentVolumeV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.metadata"></a>

```typescript
public readonly metadata: PersistentVolumeV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#metadata PersistentVolumeV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.spec"></a>

```typescript
public readonly spec: IResolvable | PersistentVolumeV1Spec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>[]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#spec PersistentVolumeV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#id PersistentVolumeV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: PersistentVolumeV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#timeouts PersistentVolumeV1#timeouts}

---

### PersistentVolumeV1Metadata <a name="PersistentVolumeV1Metadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1Metadata: persistentVolumeV1.PersistentVolumeV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#annotations PersistentVolumeV1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#labels PersistentVolumeV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

### PersistentVolumeV1Spec <a name="PersistentVolumeV1Spec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1Spec: persistentVolumeV1.PersistentVolumeV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.accessModes">accessModes</a></code> | <code>string[]</code> | Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.capacity">capacity</a></code> | <code>{[ key: string ]: string}</code> | A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a></code> | persistent_volume_source block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a></code> | claim_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a></code> | node_affinity block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>string</code> | What happens to a persistent volume when released from its claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.storageClassName">storageClassName</a></code> | <code>string</code> | A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.volumeMode">volumeMode</a></code> | <code>string</code> | Defines if a volume is intended to be used with a formatted filesystem. |

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#access_modes PersistentVolumeV1#access_modes}

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.capacity"></a>

```typescript
public readonly capacity: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#capacity PersistentVolumeV1#capacity}

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeSource"></a>

```typescript
public readonly persistentVolumeSource: PersistentVolumeV1SpecPersistentVolumeSource;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

persistent_volume_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#persistent_volume_source PersistentVolumeV1#persistent_volume_source}

---

##### `claimRef`<sup>Optional</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.claimRef"></a>

```typescript
public readonly claimRef: PersistentVolumeV1SpecClaimRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

claim_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#claim_ref PersistentVolumeV1#claim_ref}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#mount_options PersistentVolumeV1#mount_options}

---

##### `nodeAffinity`<sup>Optional</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.nodeAffinity"></a>

```typescript
public readonly nodeAffinity: PersistentVolumeV1SpecNodeAffinity;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#node_affinity PersistentVolumeV1#node_affinity}

---

##### `persistentVolumeReclaimPolicy`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeReclaimPolicy"></a>

```typescript
public readonly persistentVolumeReclaimPolicy: string;
```

- *Type:* string

What happens to a persistent volume when released from its claim.

Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#persistent_volume_reclaim_policy PersistentVolumeV1#persistent_volume_reclaim_policy}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#storage_class_name PersistentVolumeV1#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

Defines if a volume is intended to be used with a formatted filesystem.

or to remain in raw block state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#volume_mode PersistentVolumeV1#volume_mode}

---

### PersistentVolumeV1SpecClaimRef <a name="PersistentVolumeV1SpecClaimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecClaimRef: persistentVolumeV1.PersistentVolumeV1SpecClaimRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.name">name</a></code> | <code>string</code> | The name of the PersistentVolumeClaim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the PersistentVolumeClaim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecNodeAffinity <a name="PersistentVolumeV1SpecNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecNodeAffinity: persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity.property.required"></a>

```typescript
public readonly required: PersistentVolumeV1SpecNodeAffinityRequired;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#required PersistentVolumeV1#required}

---

### PersistentVolumeV1SpecNodeAffinityRequired <a name="PersistentVolumeV1SpecNodeAffinityRequired" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecNodeAffinityRequired: persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>[]</code> | node_selector_term block. |

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired.property.nodeSelectorTerm"></a>

```typescript
public readonly nodeSelectorTerm: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>[]

node_selector_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#node_selector_term PersistentVolumeV1#node_selector_term}

---

### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm: persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields">matchFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]</code> | match_fields block. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#match_expressions PersistentVolumeV1#match_expressions}

---

##### `matchFields`<sup>Optional</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields"></a>

```typescript
public readonly matchFields: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

match_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#match_fields PersistentVolumeV1#match_fields}

---

### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions: persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#key PersistentVolumeV1#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#operator PersistentVolumeV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#values PersistentVolumeV1#values}

---

### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields: persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#key PersistentVolumeV1#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#operator PersistentVolumeV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#values PersistentVolumeV1#values}

---

### PersistentVolumeV1SpecPersistentVolumeSource <a name="PersistentVolumeV1SpecPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSource: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | aws_elastic_block_store block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a></code> | azure_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a></code> | azure_file block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a></code> | ceph_fs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a></code> | cinder block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a></code> | csi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a></code> | fc block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a></code> | flex_volume block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a></code> | flocker block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a></code> | gce_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a></code> | glusterfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a></code> | iscsi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | photon_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a></code> | quobyte block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a></code> | rbd block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a></code> | vsphere_volume block. |

---

##### `awsElasticBlockStore`<sup>Optional</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.awsElasticBlockStore"></a>

```typescript
public readonly awsElasticBlockStore: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

aws_elastic_block_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#aws_elastic_block_store PersistentVolumeV1#aws_elastic_block_store}

---

##### `azureDisk`<sup>Optional</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureDisk"></a>

```typescript
public readonly azureDisk: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

azure_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#azure_disk PersistentVolumeV1#azure_disk}

---

##### `azureFile`<sup>Optional</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureFile"></a>

```typescript
public readonly azureFile: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

azure_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#azure_file PersistentVolumeV1#azure_file}

---

##### `cephFs`<sup>Optional</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cephFs"></a>

```typescript
public readonly cephFs: PersistentVolumeV1SpecPersistentVolumeSourceCephFs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

ceph_fs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#ceph_fs PersistentVolumeV1#ceph_fs}

---

##### `cinder`<sup>Optional</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cinder"></a>

```typescript
public readonly cinder: PersistentVolumeV1SpecPersistentVolumeSourceCinder;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

cinder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#cinder PersistentVolumeV1#cinder}

---

##### `csi`<sup>Optional</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.csi"></a>

```typescript
public readonly csi: PersistentVolumeV1SpecPersistentVolumeSourceCsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

csi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#csi PersistentVolumeV1#csi}

---

##### `fc`<sup>Optional</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.fc"></a>

```typescript
public readonly fc: PersistentVolumeV1SpecPersistentVolumeSourceFc;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

fc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fc PersistentVolumeV1#fc}

---

##### `flexVolume`<sup>Optional</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flexVolume"></a>

```typescript
public readonly flexVolume: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

flex_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#flex_volume PersistentVolumeV1#flex_volume}

---

##### `flocker`<sup>Optional</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flocker"></a>

```typescript
public readonly flocker: PersistentVolumeV1SpecPersistentVolumeSourceFlocker;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

flocker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#flocker PersistentVolumeV1#flocker}

---

##### `gcePersistentDisk`<sup>Optional</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.gcePersistentDisk"></a>

```typescript
public readonly gcePersistentDisk: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

gce_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#gce_persistent_disk PersistentVolumeV1#gce_persistent_disk}

---

##### `glusterfs`<sup>Optional</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.glusterfs"></a>

```typescript
public readonly glusterfs: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

glusterfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#glusterfs PersistentVolumeV1#glusterfs}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.hostPath"></a>

```typescript
public readonly hostPath: PersistentVolumeV1SpecPersistentVolumeSourceHostPath;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#host_path PersistentVolumeV1#host_path}

---

##### `iscsi`<sup>Optional</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.iscsi"></a>

```typescript
public readonly iscsi: PersistentVolumeV1SpecPersistentVolumeSourceIscsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

iscsi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#iscsi PersistentVolumeV1#iscsi}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.local"></a>

```typescript
public readonly local: PersistentVolumeV1SpecPersistentVolumeSourceLocal;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#local PersistentVolumeV1#local}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.nfs"></a>

```typescript
public readonly nfs: PersistentVolumeV1SpecPersistentVolumeSourceNfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#nfs PersistentVolumeV1#nfs}

---

##### `photonPersistentDisk`<sup>Optional</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.photonPersistentDisk"></a>

```typescript
public readonly photonPersistentDisk: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

photon_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#photon_persistent_disk PersistentVolumeV1#photon_persistent_disk}

---

##### `quobyte`<sup>Optional</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.quobyte"></a>

```typescript
public readonly quobyte: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

quobyte block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#quobyte PersistentVolumeV1#quobyte}

---

##### `rbd`<sup>Optional</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.rbd"></a>

```typescript
public readonly rbd: PersistentVolumeV1SpecPersistentVolumeSourceRbd;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

rbd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#rbd PersistentVolumeV1#rbd}

---

##### `vsphereVolume`<sup>Optional</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.vsphereVolume"></a>

```typescript
public readonly vsphereVolume: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

vsphere_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#vsphere_volume PersistentVolumeV1#vsphere_volume}

---

### PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore <a name="PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId">volumeId</a></code> | <code>string</code> | Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.partition">partition</a></code> | <code>number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#volume_id PersistentVolumeV1#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#partition PersistentVolumeV1#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceAzureDisk: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.cachingMode">cachingMode</a></code> | <code>string</code> | Host Caching mode: None, Read Only, Read Write. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.dataDiskUri">dataDiskUri</a></code> | <code>string</code> | The URI the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.diskName">diskName</a></code> | <code>string</code> | The Name of the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.kind">kind</a></code> | <code>string</code> | The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.cachingMode"></a>

```typescript
public readonly cachingMode: string;
```

- *Type:* string

Host Caching mode: None, Read Only, Read Write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#caching_mode PersistentVolumeV1#caching_mode}

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.dataDiskUri"></a>

```typescript
public readonly dataDiskUri: string;
```

- *Type:* string

The URI the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#data_disk_uri PersistentVolumeV1#data_disk_uri}

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

The Name of the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#disk_name PersistentVolumeV1#disk_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#kind PersistentVolumeV1#kind}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceAzureFile <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceAzureFile: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretName">secretName</a></code> | <code>string</code> | The name of secret that contains Azure Storage Account Name and Key. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.shareName">shareName</a></code> | <code>string</code> | Share Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretNamespace">secretNamespace</a></code> | <code>string</code> | The namespace of the secret that contains Azure Storage Account Name and Key. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

The name of secret that contains Azure Storage Account Name and Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#secret_name PersistentVolumeV1#secret_name}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Share Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#share_name PersistentVolumeV1#share_name}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretNamespace`<sup>Optional</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretNamespace"></a>

```typescript
public readonly secretNamespace: string;
```

- *Type:* string

The namespace of the secret that contains Azure Storage Account Name and Key.

For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#secret_namespace PersistentVolumeV1#secret_namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCephFs <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCephFs: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.monitors">monitors</a></code> | <code>string[]</code> | Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.path">path</a></code> | <code>string</code> | Used as the mounted root, rather than the full Ceph tree, default is /. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretFile">secretFile</a></code> | <code>string</code> | The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a></code> | secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.user">user</a></code> | <code>string</code> | User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.monitors"></a>

```typescript
public readonly monitors: string[];
```

- *Type:* string[]

Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#monitors PersistentVolumeV1#monitors}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Used as the mounted root, rather than the full Ceph tree, default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretFile`<sup>Optional</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretFile"></a>

```typescript
public readonly secretFile: string;
```

- *Type:* string

The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#secret_file PersistentVolumeV1#secret_file}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#secret_ref PersistentVolumeV1#secret_ref}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#user PersistentVolumeV1#user}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCinder <a name="PersistentVolumeV1SpecPersistentVolumeSourceCinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCinder: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.volumeId">volumeId</a></code> | <code>string</code> | Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#volume_id PersistentVolumeV1#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsi <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCsi: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.driver">driver</a></code> | <code>string</code> | the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeHandle">volumeHandle</a></code> | <code>string</code> | A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | controller_expand_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | controller_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | node_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | node_stage_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeAttributes">volumeAttributes</a></code> | <code>{[ key: string ]: string}</code> | Attributes of the volume to publish. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#driver PersistentVolumeV1#driver}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeHandle"></a>

```typescript
public readonly volumeHandle: string;
```

- *Type:* string

A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#volume_handle PersistentVolumeV1#volume_handle}

---

##### `controllerExpandSecretRef`<sup>Optional</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef"></a>

```typescript
public readonly controllerExpandSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

controller_expand_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#controller_expand_secret_ref PersistentVolumeV1#controller_expand_secret_ref}

---

##### `controllerPublishSecretRef`<sup>Optional</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef"></a>

```typescript
public readonly controllerPublishSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

controller_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#controller_publish_secret_ref PersistentVolumeV1#controller_publish_secret_ref}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `nodePublishSecretRef`<sup>Optional</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodePublishSecretRef"></a>

```typescript
public readonly nodePublishSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

node_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#node_publish_secret_ref PersistentVolumeV1#node_publish_secret_ref}

---

##### `nodeStageSecretRef`<sup>Optional</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodeStageSecretRef"></a>

```typescript
public readonly nodeStageSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

node_stage_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#node_stage_secret_ref PersistentVolumeV1#node_stage_secret_ref}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `volumeAttributes`<sup>Optional</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeAttributes"></a>

```typescript
public readonly volumeAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Attributes of the volume to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#volume_attributes PersistentVolumeV1#volume_attributes}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFc <a name="PersistentVolumeV1SpecPersistentVolumeSourceFc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceFc: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.lun">lun</a></code> | <code>number</code> | FC target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.targetWwNs">targetWwNs</a></code> | <code>string[]</code> | FC target worldwide names (WWNs). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

FC target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#lun PersistentVolumeV1#lun}

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.targetWwNs"></a>

```typescript
public readonly targetWwNs: string[];
```

- *Type:* string[]

FC target worldwide names (WWNs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#target_ww_ns PersistentVolumeV1#target_ww_ns}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceFlexVolume: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.driver">driver</a></code> | <code>string</code> | Driver is the name of the driver to use for this volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Extra command options if any. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | secret_ref block. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

Driver is the name of the driver to use for this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#driver PersistentVolumeV1#driver}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Extra command options if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#options PersistentVolumeV1#options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#secret_ref PersistentVolumeV1#secret_ref}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFlocker <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceFlocker: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetName">datasetName</a></code> | <code>string</code> | Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetUuid">datasetUuid</a></code> | <code>string</code> | UUID of the dataset. This is unique identifier of a Flocker dataset. |

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#dataset_name PersistentVolumeV1#dataset_name}

---

##### `datasetUuid`<sup>Optional</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetUuid"></a>

```typescript
public readonly datasetUuid: string;
```

- *Type:* string

UUID of the dataset. This is unique identifier of a Flocker dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#dataset_uuid PersistentVolumeV1#dataset_uuid}

---

### PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk <a name="PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.pdName">pdName</a></code> | <code>string</code> | Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.partition">partition</a></code> | <code>number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.pdName"></a>

```typescript
public readonly pdName: string;
```

- *Type:* string

Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#pd_name PersistentVolumeV1#pd_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#partition PersistentVolumeV1#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs <a name="PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceGlusterfs: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.endpointsName">endpointsName</a></code> | <code>string</code> | The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.path">path</a></code> | <code>string</code> | The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.endpointsName"></a>

```typescript
public readonly endpointsName: string;
```

- *Type:* string

The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#endpoints_name PersistentVolumeV1#endpoints_name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceHostPath <a name="PersistentVolumeV1SpecPersistentVolumeSourceHostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceHostPath: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.path">path</a></code> | <code>string</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.type">type</a></code> | <code>string</code> | Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#type PersistentVolumeV1#type}

---

### PersistentVolumeV1SpecPersistentVolumeSourceIscsi <a name="PersistentVolumeV1SpecPersistentVolumeSourceIscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceIscsi: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iqn">iqn</a></code> | <code>string</code> | Target iSCSI Qualified Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.targetPortal">targetPortal</a></code> | <code>string</code> | iSCSI target portal. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iscsiInterface">iscsiInterface</a></code> | <code>string</code> | iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.lun">lun</a></code> | <code>number</code> | iSCSI target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. |

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iqn"></a>

```typescript
public readonly iqn: string;
```

- *Type:* string

Target iSCSI Qualified Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#iqn PersistentVolumeV1#iqn}

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.targetPortal"></a>

```typescript
public readonly targetPortal: string;
```

- *Type:* string

iSCSI target portal.

The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#target_portal PersistentVolumeV1#target_portal}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `iscsiInterface`<sup>Optional</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iscsiInterface"></a>

```typescript
public readonly iscsiInterface: string;
```

- *Type:* string

iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#iscsi_interface PersistentVolumeV1#iscsi_interface}

---

##### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

iSCSI target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#lun PersistentVolumeV1#lun}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceLocal <a name="PersistentVolumeV1SpecPersistentVolumeSourceLocal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceLocal: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal.property.path">path</a></code> | <code>string</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

### PersistentVolumeV1SpecPersistentVolumeSourceNfs <a name="PersistentVolumeV1SpecPersistentVolumeSourceNfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceNfs: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.path">path</a></code> | <code>string</code> | Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.server">server</a></code> | <code>string</code> | Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#server PersistentVolumeV1#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk <a name="PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId">pdId</a></code> | <code>string</code> | ID that identifies Photon Controller persistent disk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId"></a>

```typescript
public readonly pdId: string;
```

- *Type:* string

ID that identifies Photon Controller persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#pd_id PersistentVolumeV1#pd_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

### PersistentVolumeV1SpecPersistentVolumeSourceQuobyte <a name="PersistentVolumeV1SpecPersistentVolumeSourceQuobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceQuobyte: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.registry">registry</a></code> | <code>string</code> | Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.volume">volume</a></code> | <code>string</code> | Volume is a string that references an already created Quobyte volume by name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.group">group</a></code> | <code>string</code> | Group to map volume access to Default is no group. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.user">user</a></code> | <code>string</code> | User to map volume access to Defaults to serivceaccount user. |

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#registry PersistentVolumeV1#registry}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

Volume is a string that references an already created Quobyte volume by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#volume PersistentVolumeV1#volume}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Group to map volume access to Default is no group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#group PersistentVolumeV1#group}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User to map volume access to Defaults to serivceaccount user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#user PersistentVolumeV1#user}

---

### PersistentVolumeV1SpecPersistentVolumeSourceRbd <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceRbd: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.cephMonitors">cephMonitors</a></code> | <code>string[]</code> | A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdImage">rbdImage</a></code> | <code>string</code> | The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.keyring">keyring</a></code> | <code>string</code> | Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.radosUser">radosUser</a></code> | <code>string</code> | The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdPool">rbdPool</a></code> | <code>string</code> | The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a></code> | secret_ref block. |

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.cephMonitors"></a>

```typescript
public readonly cephMonitors: string[];
```

- *Type:* string[]

A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#ceph_monitors PersistentVolumeV1#ceph_monitors}

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdImage"></a>

```typescript
public readonly rbdImage: string;
```

- *Type:* string

The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#rbd_image PersistentVolumeV1#rbd_image}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#keyring PersistentVolumeV1#keyring}

---

##### `radosUser`<sup>Optional</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.radosUser"></a>

```typescript
public readonly radosUser: string;
```

- *Type:* string

The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#rados_user PersistentVolumeV1#rados_user}

---

##### `rbdPool`<sup>Optional</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdPool"></a>

```typescript
public readonly rbdPool: string;
```

- *Type:* string

The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#rbd_pool PersistentVolumeV1#rbd_pool}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#secret_ref PersistentVolumeV1#secret_ref}

---

### PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.namespace">namespace</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume <a name="PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1SpecPersistentVolumeSourceVsphereVolume: persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.volumePath">volumePath</a></code> | <code>string</code> | Path that identifies vSphere volume vmdk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.fsType">fsType</a></code> | <code>string</code> | Filesystem type to mount. |

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.volumePath"></a>

```typescript
public readonly volumePath: string;
```

- *Type:* string

Path that identifies vSphere volume vmdk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#volume_path PersistentVolumeV1#volume_path}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

### PersistentVolumeV1Timeouts <a name="PersistentVolumeV1Timeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

const persistentVolumeV1Timeouts: persistentVolumeV1.PersistentVolumeV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#create PersistentVolumeV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/persistent_volume_v1#create PersistentVolumeV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeV1MetadataOutputReference <a name="PersistentVolumeV1MetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

---


### PersistentVolumeV1SpecClaimRefOutputReference <a name="PersistentVolumeV1SpecClaimRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecClaimRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

---


### PersistentVolumeV1SpecList <a name="PersistentVolumeV1SpecList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.get"></a>

```typescript
public get(index: number): PersistentVolumeV1SpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1Spec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>[]

---


### PersistentVolumeV1SpecNodeAffinityOutputReference <a name="PersistentVolumeV1SpecNodeAffinityOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequired` <a name="putRequired" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.putRequired"></a>

```typescript
public putRequired(value: PersistentVolumeV1SpecNodeAffinityRequired): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

---

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference">PersistentVolumeV1SpecNodeAffinityRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.required"></a>

```typescript
public readonly required: PersistentVolumeV1SpecNodeAffinityRequiredOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference">PersistentVolumeV1SpecNodeAffinityRequiredOutputReference</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: PersistentVolumeV1SpecNodeAffinityRequired;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecNodeAffinity;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.get"></a>

```typescript
public get(index: number): PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>[]

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get"></a>

```typescript
public get(index: number): PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get"></a>

```typescript
public get(index: number): PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields">putMatchFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields">resetMatchFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

---

##### `putMatchFields` <a name="putMatchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields"></a>

```typescript
public putMatchFields(value: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchFields` <a name="resetMatchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields"></a>

```typescript
public resetMatchFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields">matchFields</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput">matchFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a>

---

##### `matchFields`<sup>Required</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields"></a>

```typescript
public readonly matchFields: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>[]

---

##### `matchFieldsInput`<sup>Optional</sup> <a name="matchFieldsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput"></a>

```typescript
public readonly matchFieldsInput: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>

---


### PersistentVolumeV1SpecNodeAffinityRequiredOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm">putNodeSelectorTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeSelectorTerm` <a name="putNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm"></a>

```typescript
public putNodeSelectorTerm(value: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput">nodeSelectorTermInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm"></a>

```typescript
public readonly nodeSelectorTerm: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList</a>

---

##### `nodeSelectorTermInput`<sup>Optional</sup> <a name="nodeSelectorTermInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput"></a>

```typescript
public readonly nodeSelectorTermInput: IResolvable | PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecNodeAffinityRequired;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

---


### PersistentVolumeV1SpecOutputReference <a name="PersistentVolumeV1SpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putClaimRef">putClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putNodeAffinity">putNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putPersistentVolumeSource">putPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetClaimRef">resetClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetNodeAffinity">resetNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetPersistentVolumeReclaimPolicy">resetPersistentVolumeReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimRef` <a name="putClaimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putClaimRef"></a>

```typescript
public putClaimRef(value: PersistentVolumeV1SpecClaimRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putClaimRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

---

##### `putNodeAffinity` <a name="putNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putNodeAffinity"></a>

```typescript
public putNodeAffinity(value: PersistentVolumeV1SpecNodeAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putNodeAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

---

##### `putPersistentVolumeSource` <a name="putPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putPersistentVolumeSource"></a>

```typescript
public putPersistentVolumeSource(value: PersistentVolumeV1SpecPersistentVolumeSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putPersistentVolumeSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

---

##### `resetClaimRef` <a name="resetClaimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetClaimRef"></a>

```typescript
public resetClaimRef(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetNodeAffinity` <a name="resetNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetNodeAffinity"></a>

```typescript
public resetNodeAffinity(): void
```

##### `resetPersistentVolumeReclaimPolicy` <a name="resetPersistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetPersistentVolumeReclaimPolicy"></a>

```typescript
public resetPersistentVolumeReclaimPolicy(): void
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetStorageClassName"></a>

```typescript
public resetStorageClassName(): void
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetVolumeMode"></a>

```typescript
public resetVolumeMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference">PersistentVolumeV1SpecClaimRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference">PersistentVolumeV1SpecNodeAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModesInput">accessModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacityInput">capacityInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRefInput">claimRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinityInput">nodeAffinityInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicyInput">persistentVolumeReclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSourceInput">persistentVolumeSourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModes">accessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacity">capacity</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimRef`<sup>Required</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRef"></a>

```typescript
public readonly claimRef: PersistentVolumeV1SpecClaimRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference">PersistentVolumeV1SpecClaimRefOutputReference</a>

---

##### `nodeAffinity`<sup>Required</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinity"></a>

```typescript
public readonly nodeAffinity: PersistentVolumeV1SpecNodeAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference">PersistentVolumeV1SpecNodeAffinityOutputReference</a>

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSource"></a>

```typescript
public readonly persistentVolumeSource: PersistentVolumeV1SpecPersistentVolumeSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceOutputReference</a>

---

##### `accessModesInput`<sup>Optional</sup> <a name="accessModesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModesInput"></a>

```typescript
public readonly accessModesInput: string[];
```

- *Type:* string[]

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `claimRefInput`<sup>Optional</sup> <a name="claimRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRefInput"></a>

```typescript
public readonly claimRefInput: PersistentVolumeV1SpecClaimRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `nodeAffinityInput`<sup>Optional</sup> <a name="nodeAffinityInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinityInput"></a>

```typescript
public readonly nodeAffinityInput: PersistentVolumeV1SpecNodeAffinity;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

---

##### `persistentVolumeReclaimPolicyInput`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicyInput"></a>

```typescript
public readonly persistentVolumeReclaimPolicyInput: string;
```

- *Type:* string

---

##### `persistentVolumeSourceInput`<sup>Optional</sup> <a name="persistentVolumeSourceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSourceInput"></a>

```typescript
public readonly persistentVolumeSourceInput: PersistentVolumeV1SpecPersistentVolumeSource;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassNameInput"></a>

```typescript
public readonly storageClassNameInput: string;
```

- *Type:* string

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeModeInput"></a>

```typescript
public readonly volumeModeInput: string;
```

- *Type:* string

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacity"></a>

```typescript
public readonly capacity: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `persistentVolumeReclaimPolicy`<sup>Required</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicy"></a>

```typescript
public readonly persistentVolumeReclaimPolicy: string;
```

- *Type:* string

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1Spec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput">partitionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: number;
```

- *Type:* number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput">cachingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput">dataDiskUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode">cachingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri">dataDiskUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName">diskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachingModeInput`<sup>Optional</sup> <a name="cachingModeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput"></a>

```typescript
public readonly cachingModeInput: string;
```

- *Type:* string

---

##### `dataDiskUriInput`<sup>Optional</sup> <a name="dataDiskUriInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput"></a>

```typescript
public readonly dataDiskUriInput: string;
```

- *Type:* string

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput"></a>

```typescript
public readonly diskNameInput: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode"></a>

```typescript
public readonly cachingMode: string;
```

- *Type:* string

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri"></a>

```typescript
public readonly dataDiskUri: string;
```

- *Type:* string

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace">resetSecretNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretNamespace` <a name="resetSecretNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace"></a>

```typescript
public resetSecretNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput">secretNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace">secretNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `secretNamespaceInput`<sup>Optional</sup> <a name="secretNamespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput"></a>

```typescript
public readonly secretNamespaceInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `secretNamespace`<sup>Required</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace"></a>

```typescript
public readonly secretNamespace: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile">resetSecretFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.putSecretRef"></a>

```typescript
public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretFile` <a name="resetSecretFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile"></a>

```typescript
public resetSecretFile(): void
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef"></a>

```typescript
public resetSecretRef(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput">monitorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput">secretFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitors">monitors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFile">secretFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference</a>

---

##### `monitorsInput`<sup>Optional</sup> <a name="monitorsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput"></a>

```typescript
public readonly monitorsInput: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretFileInput`<sup>Optional</sup> <a name="secretFileInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput"></a>

```typescript
public readonly secretFileInput: string;
```

- *Type:* string

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput"></a>

```typescript
public readonly secretRefInput: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitors"></a>

```typescript
public readonly monitors: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretFile`<sup>Required</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFile"></a>

```typescript
public readonly secretFile: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCephFs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCinder;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef">putControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef">putControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef">putNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef">putNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef">resetControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef">resetControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef">resetNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef">resetNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes">resetVolumeAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControllerExpandSecretRef` <a name="putControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef"></a>

```typescript
public putControllerExpandSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `putControllerPublishSecretRef` <a name="putControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef"></a>

```typescript
public putControllerPublishSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `putNodePublishSecretRef` <a name="putNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef"></a>

```typescript
public putNodePublishSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `putNodeStageSecretRef` <a name="putNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef"></a>

```typescript
public putNodeStageSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `resetControllerExpandSecretRef` <a name="resetControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef"></a>

```typescript
public resetControllerExpandSecretRef(): void
```

##### `resetControllerPublishSecretRef` <a name="resetControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef"></a>

```typescript
public resetControllerPublishSecretRef(): void
```

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetNodePublishSecretRef` <a name="resetNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef"></a>

```typescript
public resetNodePublishSecretRef(): void
```

##### `resetNodeStageSecretRef` <a name="resetNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef"></a>

```typescript
public resetNodeStageSecretRef(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetVolumeAttributes` <a name="resetVolumeAttributes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes"></a>

```typescript
public resetVolumeAttributes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput">controllerExpandSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput">controllerPublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput">nodePublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput">nodeStageSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput">volumeAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput">volumeHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes">volumeAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle">volumeHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controllerExpandSecretRef`<sup>Required</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef"></a>

```typescript
public readonly controllerExpandSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a>

---

##### `controllerPublishSecretRef`<sup>Required</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef"></a>

```typescript
public readonly controllerPublishSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a>

---

##### `nodePublishSecretRef`<sup>Required</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef"></a>

```typescript
public readonly nodePublishSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a>

---

##### `nodeStageSecretRef`<sup>Required</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef"></a>

```typescript
public readonly nodeStageSecretRef: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a>

---

##### `controllerExpandSecretRefInput`<sup>Optional</sup> <a name="controllerExpandSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput"></a>

```typescript
public readonly controllerExpandSecretRefInput: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `controllerPublishSecretRefInput`<sup>Optional</sup> <a name="controllerPublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput"></a>

```typescript
public readonly controllerPublishSecretRefInput: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `nodePublishSecretRefInput`<sup>Optional</sup> <a name="nodePublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput"></a>

```typescript
public readonly nodePublishSecretRefInput: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `nodeStageSecretRefInput`<sup>Optional</sup> <a name="nodeStageSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput"></a>

```typescript
public readonly nodeStageSecretRefInput: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeAttributesInput`<sup>Optional</sup> <a name="volumeAttributesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput"></a>

```typescript
public readonly volumeAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeHandleInput`<sup>Optional</sup> <a name="volumeHandleInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput"></a>

```typescript
public readonly volumeHandleInput: string;
```

- *Type:* string

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeAttributes`<sup>Required</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes"></a>

```typescript
public readonly volumeAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle"></a>

```typescript
public readonly volumeHandle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceCsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput">targetWwNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNs">targetWwNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetWwNsInput`<sup>Optional</sup> <a name="targetWwNsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput"></a>

```typescript
public readonly targetWwNsInput: string[];
```

- *Type:* string[]

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNs"></a>

```typescript
public readonly targetWwNs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceFc;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef"></a>

```typescript
public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef"></a>

```typescript
public resetSecretRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput"></a>

```typescript
public readonly secretRefInput: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid">resetDatasetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName"></a>

```typescript
public resetDatasetName(): void
```

##### `resetDatasetUuid` <a name="resetDatasetUuid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid"></a>

```typescript
public resetDatasetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput">datasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput">datasetUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid">datasetUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput"></a>

```typescript
public readonly datasetNameInput: string;
```

- *Type:* string

---

##### `datasetUuidInput`<sup>Optional</sup> <a name="datasetUuidInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput"></a>

```typescript
public readonly datasetUuidInput: string;
```

- *Type:* string

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

##### `datasetUuid`<sup>Required</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid"></a>

```typescript
public readonly datasetUuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceFlocker;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput">partitionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput">pdNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName">pdName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: number;
```

- *Type:* number

---

##### `pdNameInput`<sup>Optional</sup> <a name="pdNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput"></a>

```typescript
public readonly pdNameInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName"></a>

```typescript
public readonly pdName: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput">endpointsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName">endpointsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointsNameInput`<sup>Optional</sup> <a name="endpointsNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput"></a>

```typescript
public readonly endpointsNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName"></a>

```typescript
public readonly endpointsName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceHostPath;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface">resetIscsiInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetLun">resetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetIscsiInterface` <a name="resetIscsiInterface" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface"></a>

```typescript
public resetIscsiInterface(): void
```

##### `resetLun` <a name="resetLun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetLun"></a>

```typescript
public resetLun(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput">iqnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput">iscsiInterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lunInput">lunInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput">targetPortalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqn">iqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface">iscsiInterface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lun">lun</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal">targetPortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `iqnInput`<sup>Optional</sup> <a name="iqnInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput"></a>

```typescript
public readonly iqnInput: string;
```

- *Type:* string

---

##### `iscsiInterfaceInput`<sup>Optional</sup> <a name="iscsiInterfaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput"></a>

```typescript
public readonly iscsiInterfaceInput: string;
```

- *Type:* string

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lunInput"></a>

```typescript
public readonly lunInput: number;
```

- *Type:* number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetPortalInput`<sup>Optional</sup> <a name="targetPortalInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput"></a>

```typescript
public readonly targetPortalInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqn"></a>

```typescript
public readonly iqn: string;
```

- *Type:* string

---

##### `iscsiInterface`<sup>Required</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface"></a>

```typescript
public readonly iscsiInterface: string;
```

- *Type:* string

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lun"></a>

```typescript
public readonly lun: number;
```

- *Type:* number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal"></a>

```typescript
public readonly targetPortal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceIscsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceLocal;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceNfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore">putAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureDisk">putAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureFile">putAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCephFs">putCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCinder">putCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCsi">putCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFc">putFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlexVolume">putFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlocker">putFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGcePersistentDisk">putGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGlusterfs">putGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putHostPath">putHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putIscsi">putIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putLocal">putLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk">putPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putQuobyte">putQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putRbd">putRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putVsphereVolume">putVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore">resetAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureDisk">resetAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureFile">resetAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCephFs">resetCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCinder">resetCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCsi">resetCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFc">resetFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlexVolume">resetFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlocker">resetFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk">resetGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGlusterfs">resetGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetIscsi">resetIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk">resetPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetQuobyte">resetQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetRbd">resetRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetVsphereVolume">resetVsphereVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsElasticBlockStore` <a name="putAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore"></a>

```typescript
public putAwsElasticBlockStore(value: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `putAzureDisk` <a name="putAzureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureDisk"></a>

```typescript
public putAzureDisk(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

---

##### `putAzureFile` <a name="putAzureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureFile"></a>

```typescript
public putAzureFile(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

---

##### `putCephFs` <a name="putCephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCephFs"></a>

```typescript
public putCephFs(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCephFs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

---

##### `putCinder` <a name="putCinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCinder"></a>

```typescript
public putCinder(value: PersistentVolumeV1SpecPersistentVolumeSourceCinder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCinder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

---

##### `putCsi` <a name="putCsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCsi"></a>

```typescript
public putCsi(value: PersistentVolumeV1SpecPersistentVolumeSourceCsi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

---

##### `putFc` <a name="putFc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFc"></a>

```typescript
public putFc(value: PersistentVolumeV1SpecPersistentVolumeSourceFc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

---

##### `putFlexVolume` <a name="putFlexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlexVolume"></a>

```typescript
public putFlexVolume(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

---

##### `putFlocker` <a name="putFlocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlocker"></a>

```typescript
public putFlocker(value: PersistentVolumeV1SpecPersistentVolumeSourceFlocker): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlocker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

---

##### `putGcePersistentDisk` <a name="putGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGcePersistentDisk"></a>

```typescript
public putGcePersistentDisk(value: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `putGlusterfs` <a name="putGlusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGlusterfs"></a>

```typescript
public putGlusterfs(value: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

---

##### `putHostPath` <a name="putHostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putHostPath"></a>

```typescript
public putHostPath(value: PersistentVolumeV1SpecPersistentVolumeSourceHostPath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putHostPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

---

##### `putIscsi` <a name="putIscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putIscsi"></a>

```typescript
public putIscsi(value: PersistentVolumeV1SpecPersistentVolumeSourceIscsi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putIscsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

---

##### `putLocal` <a name="putLocal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putLocal"></a>

```typescript
public putLocal(value: PersistentVolumeV1SpecPersistentVolumeSourceLocal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

---

##### `putNfs` <a name="putNfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putNfs"></a>

```typescript
public putNfs(value: PersistentVolumeV1SpecPersistentVolumeSourceNfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

---

##### `putPhotonPersistentDisk` <a name="putPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk"></a>

```typescript
public putPhotonPersistentDisk(value: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `putQuobyte` <a name="putQuobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putQuobyte"></a>

```typescript
public putQuobyte(value: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

---

##### `putRbd` <a name="putRbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putRbd"></a>

```typescript
public putRbd(value: PersistentVolumeV1SpecPersistentVolumeSourceRbd): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putRbd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

---

##### `putVsphereVolume` <a name="putVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putVsphereVolume"></a>

```typescript
public putVsphereVolume(value: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putVsphereVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

---

##### `resetAwsElasticBlockStore` <a name="resetAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore"></a>

```typescript
public resetAwsElasticBlockStore(): void
```

##### `resetAzureDisk` <a name="resetAzureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureDisk"></a>

```typescript
public resetAzureDisk(): void
```

##### `resetAzureFile` <a name="resetAzureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureFile"></a>

```typescript
public resetAzureFile(): void
```

##### `resetCephFs` <a name="resetCephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCephFs"></a>

```typescript
public resetCephFs(): void
```

##### `resetCinder` <a name="resetCinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCinder"></a>

```typescript
public resetCinder(): void
```

##### `resetCsi` <a name="resetCsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCsi"></a>

```typescript
public resetCsi(): void
```

##### `resetFc` <a name="resetFc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFc"></a>

```typescript
public resetFc(): void
```

##### `resetFlexVolume` <a name="resetFlexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlexVolume"></a>

```typescript
public resetFlexVolume(): void
```

##### `resetFlocker` <a name="resetFlocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlocker"></a>

```typescript
public resetFlocker(): void
```

##### `resetGcePersistentDisk` <a name="resetGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk"></a>

```typescript
public resetGcePersistentDisk(): void
```

##### `resetGlusterfs` <a name="resetGlusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGlusterfs"></a>

```typescript
public resetGlusterfs(): void
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetHostPath"></a>

```typescript
public resetHostPath(): void
```

##### `resetIscsi` <a name="resetIscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetIscsi"></a>

```typescript
public resetIscsi(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```

##### `resetPhotonPersistentDisk` <a name="resetPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk"></a>

```typescript
public resetPhotonPersistentDisk(): void
```

##### `resetQuobyte` <a name="resetQuobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetQuobyte"></a>

```typescript
public resetQuobyte(): void
```

##### `resetRbd` <a name="resetRbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetRbd"></a>

```typescript
public resetRbd(): void
```

##### `resetVsphereVolume` <a name="resetVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetVsphereVolume"></a>

```typescript
public resetVsphereVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput">awsElasticBlockStoreInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDiskInput">azureDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFileInput">azureFileInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFsInput">cephFsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinderInput">cinderInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csiInput">csiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fcInput">fcInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolumeInput">flexVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flockerInput">flockerInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput">gcePersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfsInput">glusterfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPathInput">hostPathInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsiInput">iscsiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.localInput">localInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput">photonPersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyteInput">quobyteInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbdInput">rbdInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput">vsphereVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsElasticBlockStore`<sup>Required</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore"></a>

```typescript
public readonly awsElasticBlockStore: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a>

---

##### `azureDisk`<sup>Required</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDisk"></a>

```typescript
public readonly azureDisk: PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference</a>

---

##### `azureFile`<sup>Required</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFile"></a>

```typescript
public readonly azureFile: PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference</a>

---

##### `cephFs`<sup>Required</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFs"></a>

```typescript
public readonly cephFs: PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference</a>

---

##### `cinder`<sup>Required</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinder"></a>

```typescript
public readonly cinder: PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference</a>

---

##### `csi`<sup>Required</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csi"></a>

```typescript
public readonly csi: PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference</a>

---

##### `fc`<sup>Required</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fc"></a>

```typescript
public readonly fc: PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference</a>

---

##### `flexVolume`<sup>Required</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolume"></a>

```typescript
public readonly flexVolume: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference</a>

---

##### `flocker`<sup>Required</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flocker"></a>

```typescript
public readonly flocker: PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference</a>

---

##### `gcePersistentDisk`<sup>Required</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk"></a>

```typescript
public readonly gcePersistentDisk: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference</a>

---

##### `glusterfs`<sup>Required</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfs"></a>

```typescript
public readonly glusterfs: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference</a>

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference</a>

---

##### `iscsi`<sup>Required</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsi"></a>

```typescript
public readonly iscsi: PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference</a>

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.local"></a>

```typescript
public readonly local: PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfs"></a>

```typescript
public readonly nfs: PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference</a>

---

##### `photonPersistentDisk`<sup>Required</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk"></a>

```typescript
public readonly photonPersistentDisk: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a>

---

##### `quobyte`<sup>Required</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyte"></a>

```typescript
public readonly quobyte: PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference</a>

---

##### `rbd`<sup>Required</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbd"></a>

```typescript
public readonly rbd: PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference</a>

---

##### `vsphereVolume`<sup>Required</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolume"></a>

```typescript
public readonly vsphereVolume: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference</a>

---

##### `awsElasticBlockStoreInput`<sup>Optional</sup> <a name="awsElasticBlockStoreInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput"></a>

```typescript
public readonly awsElasticBlockStoreInput: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `azureDiskInput`<sup>Optional</sup> <a name="azureDiskInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDiskInput"></a>

```typescript
public readonly azureDiskInput: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

---

##### `azureFileInput`<sup>Optional</sup> <a name="azureFileInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFileInput"></a>

```typescript
public readonly azureFileInput: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

---

##### `cephFsInput`<sup>Optional</sup> <a name="cephFsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFsInput"></a>

```typescript
public readonly cephFsInput: PersistentVolumeV1SpecPersistentVolumeSourceCephFs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

---

##### `cinderInput`<sup>Optional</sup> <a name="cinderInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinderInput"></a>

```typescript
public readonly cinderInput: PersistentVolumeV1SpecPersistentVolumeSourceCinder;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

---

##### `csiInput`<sup>Optional</sup> <a name="csiInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csiInput"></a>

```typescript
public readonly csiInput: PersistentVolumeV1SpecPersistentVolumeSourceCsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

---

##### `fcInput`<sup>Optional</sup> <a name="fcInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fcInput"></a>

```typescript
public readonly fcInput: PersistentVolumeV1SpecPersistentVolumeSourceFc;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

---

##### `flexVolumeInput`<sup>Optional</sup> <a name="flexVolumeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolumeInput"></a>

```typescript
public readonly flexVolumeInput: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

---

##### `flockerInput`<sup>Optional</sup> <a name="flockerInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flockerInput"></a>

```typescript
public readonly flockerInput: PersistentVolumeV1SpecPersistentVolumeSourceFlocker;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

---

##### `gcePersistentDiskInput`<sup>Optional</sup> <a name="gcePersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput"></a>

```typescript
public readonly gcePersistentDiskInput: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `glusterfsInput`<sup>Optional</sup> <a name="glusterfsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfsInput"></a>

```typescript
public readonly glusterfsInput: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: PersistentVolumeV1SpecPersistentVolumeSourceHostPath;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

---

##### `iscsiInput`<sup>Optional</sup> <a name="iscsiInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsiInput"></a>

```typescript
public readonly iscsiInput: PersistentVolumeV1SpecPersistentVolumeSourceIscsi;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.localInput"></a>

```typescript
public readonly localInput: PersistentVolumeV1SpecPersistentVolumeSourceLocal;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: PersistentVolumeV1SpecPersistentVolumeSourceNfs;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

---

##### `photonPersistentDiskInput`<sup>Optional</sup> <a name="photonPersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput"></a>

```typescript
public readonly photonPersistentDiskInput: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `quobyteInput`<sup>Optional</sup> <a name="quobyteInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyteInput"></a>

```typescript
public readonly quobyteInput: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

---

##### `rbdInput`<sup>Optional</sup> <a name="rbdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbdInput"></a>

```typescript
public readonly rbdInput: PersistentVolumeV1SpecPersistentVolumeSourceRbd;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

---

##### `vsphereVolumeInput`<sup>Optional</sup> <a name="vsphereVolumeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput"></a>

```typescript
public readonly vsphereVolumeInput: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSource;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput">pdIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId">pdId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `pdIdInput`<sup>Optional</sup> <a name="pdIdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput"></a>

```typescript
public readonly pdIdInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId"></a>

```typescript
public readonly pdId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput">registryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput">volumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registry">registry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volume">volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput"></a>

```typescript
public readonly registryInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRadosUser">resetRadosUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRbdPool">resetRbdPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.putSecretRef"></a>

```typescript
public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetKeyring"></a>

```typescript
public resetKeyring(): void
```

##### `resetRadosUser` <a name="resetRadosUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRadosUser"></a>

```typescript
public resetRadosUser(): void
```

##### `resetRbdPool` <a name="resetRbdPool" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRbdPool"></a>

```typescript
public resetRbdPool(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetSecretRef"></a>

```typescript
public resetSecretRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput">cephMonitorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyringInput">keyringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput">radosUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput">rbdImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput">rbdPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors">cephMonitors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyring">keyring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUser">radosUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImage">rbdImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPool">rbdPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRef"></a>

```typescript
public readonly secretRef: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference</a>

---

##### `cephMonitorsInput`<sup>Optional</sup> <a name="cephMonitorsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput"></a>

```typescript
public readonly cephMonitorsInput: string[];
```

- *Type:* string[]

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyringInput"></a>

```typescript
public readonly keyringInput: string;
```

- *Type:* string

---

##### `radosUserInput`<sup>Optional</sup> <a name="radosUserInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput"></a>

```typescript
public readonly radosUserInput: string;
```

- *Type:* string

---

##### `rbdImageInput`<sup>Optional</sup> <a name="rbdImageInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput"></a>

```typescript
public readonly rbdImageInput: string;
```

- *Type:* string

---

##### `rbdPoolInput`<sup>Optional</sup> <a name="rbdPoolInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput"></a>

```typescript
public readonly rbdPoolInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput"></a>

```typescript
public readonly secretRefInput: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors"></a>

```typescript
public readonly cephMonitors: string[];
```

- *Type:* string[]

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

---

##### `radosUser`<sup>Required</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUser"></a>

```typescript
public readonly radosUser: string;
```

- *Type:* string

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImage"></a>

```typescript
public readonly rbdImage: string;
```

- *Type:* string

---

##### `rbdPool`<sup>Required</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPool"></a>

```typescript
public readonly rbdPool: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceRbd;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput">volumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath">volumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `volumePathInput`<sup>Optional</sup> <a name="volumePathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput"></a>

```typescript
public readonly volumePathInput: string;
```

- *Type:* string

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath"></a>

```typescript
public readonly volumePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

---


### PersistentVolumeV1TimeoutsOutputReference <a name="PersistentVolumeV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { persistentVolumeV1 } from '@cdktf/provider-kubernetes'

new persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersistentVolumeV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a>

---



