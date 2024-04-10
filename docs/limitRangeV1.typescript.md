# `limitRangeV1` Submodule <a name="`limitRangeV1` Submodule" id="@cdktf/provider-kubernetes.limitRangeV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LimitRangeV1 <a name="LimitRangeV1" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1 kubernetes_limit_range_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

new limitRangeV1.LimitRangeV1(scope: Construct, id: string, config: LimitRangeV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config">LimitRangeV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config">LimitRangeV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putMetadata"></a>

```typescript
public putMetadata(value: LimitRangeV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putSpec"></a>

```typescript
public putSpec(value: LimitRangeV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LimitRangeV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isConstruct"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

limitRangeV1.LimitRangeV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformElement"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

limitRangeV1.LimitRangeV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformResource"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

limitRangeV1.LimitRangeV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

limitRangeV1.LimitRangeV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LimitRangeV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LimitRangeV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LimitRangeV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LimitRangeV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference">LimitRangeV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference">LimitRangeV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadata"></a>

```typescript
public readonly metadata: LimitRangeV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference">LimitRangeV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.spec"></a>

```typescript
public readonly spec: LimitRangeV1SpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference">LimitRangeV1SpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: LimitRangeV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.specInput"></a>

```typescript
public readonly specInput: LimitRangeV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LimitRangeV1Config <a name="LimitRangeV1Config" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

const limitRangeV1Config: limitRangeV1.LimitRangeV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#id LimitRangeV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a></code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.metadata"></a>

```typescript
public readonly metadata: LimitRangeV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#metadata LimitRangeV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#id LimitRangeV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Config.property.spec"></a>

```typescript
public readonly spec: LimitRangeV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#spec LimitRangeV1#spec}

---

### LimitRangeV1Metadata <a name="LimitRangeV1Metadata" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

const limitRangeV1Metadata: limitRangeV1.LimitRangeV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the limit range that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the limit range. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the limit range, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the limit range must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the limit range that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#annotations LimitRangeV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#generate_name LimitRangeV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the limit range.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#labels LimitRangeV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the limit range, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#name LimitRangeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the limit range must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#namespace LimitRangeV1#namespace}

---

### LimitRangeV1Spec <a name="LimitRangeV1Spec" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

const limitRangeV1Spec: limitRangeV1.LimitRangeV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec.property.limit">limit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>[]</code> | limit block. |

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec.property.limit"></a>

```typescript
public readonly limit: IResolvable | LimitRangeV1SpecLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>[]

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#limit LimitRangeV1#limit}

---

### LimitRangeV1SpecLimit <a name="LimitRangeV1SpecLimit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

const limitRangeV1SpecLimit: limitRangeV1.LimitRangeV1SpecLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.default">default</a></code> | <code>{[ key: string ]: string}</code> | Default resource requirement limit value by resource name if resource limit is omitted. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.defaultRequest">defaultRequest</a></code> | <code>{[ key: string ]: string}</code> | The default resource requirement request value by resource name if resource request is omitted. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.max">max</a></code> | <code>{[ key: string ]: string}</code> | Max usage constraints on this kind by resource name. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.maxLimitRequestRatio">maxLimitRequestRatio</a></code> | <code>{[ key: string ]: string}</code> | The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.min">min</a></code> | <code>{[ key: string ]: string}</code> | Min usage constraints on this kind by resource name. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.type">type</a></code> | <code>string</code> | Type of resource that this limit applies to. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.default"></a>

```typescript
public readonly default: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default resource requirement limit value by resource name if resource limit is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#default LimitRangeV1#default}

---

##### `defaultRequest`<sup>Optional</sup> <a name="defaultRequest" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.defaultRequest"></a>

```typescript
public readonly defaultRequest: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The default resource requirement request value by resource name if resource request is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#default_request LimitRangeV1#default_request}

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.max"></a>

```typescript
public readonly max: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Max usage constraints on this kind by resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#max LimitRangeV1#max}

---

##### `maxLimitRequestRatio`<sup>Optional</sup> <a name="maxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.maxLimitRequestRatio"></a>

```typescript
public readonly maxLimitRequestRatio: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value;

this represents the max burst for the named resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#max_limit_request_ratio LimitRangeV1#max_limit_request_ratio}

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.min"></a>

```typescript
public readonly min: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Min usage constraints on this kind by resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#min LimitRangeV1#min}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of resource that this limit applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/limit_range_v1#type LimitRangeV1#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LimitRangeV1MetadataOutputReference <a name="LimitRangeV1MetadataOutputReference" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

new limitRangeV1.LimitRangeV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LimitRangeV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Metadata">LimitRangeV1Metadata</a>

---


### LimitRangeV1SpecLimitList <a name="LimitRangeV1SpecLimitList" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

new limitRangeV1.LimitRangeV1SpecLimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.get"></a>

```typescript
public get(index: number): LimitRangeV1SpecLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LimitRangeV1SpecLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>[]

---


### LimitRangeV1SpecLimitOutputReference <a name="LimitRangeV1SpecLimitOutputReference" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

new limitRangeV1.LimitRangeV1SpecLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefaultRequest">resetDefaultRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMaxLimitRequestRatio">resetMaxLimitRequestRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDefaultRequest` <a name="resetDefaultRequest" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetDefaultRequest"></a>

```typescript
public resetDefaultRequest(): void
```

##### `resetMax` <a name="resetMax" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMaxLimitRequestRatio` <a name="resetMaxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMaxLimitRequestRatio"></a>

```typescript
public resetMaxLimitRequestRatio(): void
```

##### `resetMin` <a name="resetMin" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultInput">defaultInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequestInput">defaultRequestInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxInput">maxInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatioInput">maxLimitRequestRatioInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.minInput">minInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.default">default</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequest">defaultRequest</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.max">max</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatio">maxLimitRequestRatio</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.min">min</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultRequestInput`<sup>Optional</sup> <a name="defaultRequestInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequestInput"></a>

```typescript
public readonly defaultRequestInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxLimitRequestRatioInput`<sup>Optional</sup> <a name="maxLimitRequestRatioInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatioInput"></a>

```typescript
public readonly maxLimitRequestRatioInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.minInput"></a>

```typescript
public readonly minInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.default"></a>

```typescript
public readonly default: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultRequest`<sup>Required</sup> <a name="defaultRequest" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.defaultRequest"></a>

```typescript
public readonly defaultRequest: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.max"></a>

```typescript
public readonly max: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxLimitRequestRatio`<sup>Required</sup> <a name="maxLimitRequestRatio" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.maxLimitRequestRatio"></a>

```typescript
public readonly maxLimitRequestRatio: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.min"></a>

```typescript
public readonly min: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LimitRangeV1SpecLimit;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>

---


### LimitRangeV1SpecOutputReference <a name="LimitRangeV1SpecOutputReference" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer"></a>

```typescript
import { limitRangeV1 } from '@cdktf/provider-kubernetes'

new limitRangeV1.LimitRangeV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resetLimit">resetLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimit` <a name="putLimit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.putLimit"></a>

```typescript
public putLimit(value: IResolvable | LimitRangeV1SpecLimit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.putLimit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>[]

---

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList">LimitRangeV1SpecLimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limitInput">limitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limit"></a>

```typescript
public readonly limit: LimitRangeV1SpecLimitList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimitList">LimitRangeV1SpecLimitList</a>

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: IResolvable | LimitRangeV1SpecLimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecLimit">LimitRangeV1SpecLimit</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LimitRangeV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.limitRangeV1.LimitRangeV1Spec">LimitRangeV1Spec</a>

---



