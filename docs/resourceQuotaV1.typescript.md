# `resourceQuotaV1` Submodule <a name="`resourceQuotaV1` Submodule" id="@cdktf/provider-kubernetes.resourceQuotaV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceQuotaV1 <a name="ResourceQuotaV1" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1 kubernetes_resource_quota_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

new resourceQuotaV1.ResourceQuotaV1(scope: Construct, id: string, config: ResourceQuotaV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config">ResourceQuotaV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config">ResourceQuotaV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata"></a>

```typescript
public putMetadata(value: ResourceQuotaV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec"></a>

```typescript
public putSpec(value: ResourceQuotaV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceQuotaV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetSpec"></a>

```typescript
public resetSpec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceQuotaV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isConstruct"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

resourceQuotaV1.ResourceQuotaV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformElement"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

resourceQuotaV1.ResourceQuotaV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformResource"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

resourceQuotaV1.ResourceQuotaV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

resourceQuotaV1.ResourceQuotaV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ResourceQuotaV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceQuotaV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceQuotaV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceQuotaV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference">ResourceQuotaV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference">ResourceQuotaV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference">ResourceQuotaV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadata"></a>

```typescript
public readonly metadata: ResourceQuotaV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference">ResourceQuotaV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.spec"></a>

```typescript
public readonly spec: ResourceQuotaV1SpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference">ResourceQuotaV1SpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceQuotaV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference">ResourceQuotaV1TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: ResourceQuotaV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.specInput"></a>

```typescript
public readonly specInput: ResourceQuotaV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ResourceQuotaV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceQuotaV1Config <a name="ResourceQuotaV1Config" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

const resourceQuotaV1Config: resourceQuotaV1.ResourceQuotaV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#id ResourceQuotaV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.metadata"></a>

```typescript
public readonly metadata: ResourceQuotaV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#metadata ResourceQuotaV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#id ResourceQuotaV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.spec"></a>

```typescript
public readonly spec: ResourceQuotaV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#spec ResourceQuotaV1#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceQuotaV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#timeouts ResourceQuotaV1#timeouts}

---

### ResourceQuotaV1Metadata <a name="ResourceQuotaV1Metadata" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

const resourceQuotaV1Metadata: resourceQuotaV1.ResourceQuotaV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the resource quota must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#annotations ResourceQuotaV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#generate_name ResourceQuotaV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#labels ResourceQuotaV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#name ResourceQuotaV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the resource quota must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#namespace ResourceQuotaV1#namespace}

---

### ResourceQuotaV1Spec <a name="ResourceQuotaV1Spec" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

const resourceQuotaV1Spec: resourceQuotaV1.ResourceQuotaV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.hard">hard</a></code> | <code>{[ key: string ]: string}</code> | The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopes">scopes</a></code> | <code>string[]</code> | A collection of filters that must match each object tracked by a quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopeSelector">scopeSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a></code> | scope_selector block. |

---

##### `hard`<sup>Optional</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.hard"></a>

```typescript
public readonly hard: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#hard ResourceQuotaV1#hard}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

A collection of filters that must match each object tracked by a quota.

If not specified, the quota matches all objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#scopes ResourceQuotaV1#scopes}

---

##### `scopeSelector`<sup>Optional</sup> <a name="scopeSelector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec.property.scopeSelector"></a>

```typescript
public readonly scopeSelector: ResourceQuotaV1SpecScopeSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

scope_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#scope_selector ResourceQuotaV1#scope_selector}

---

### ResourceQuotaV1SpecScopeSelector <a name="ResourceQuotaV1SpecScopeSelector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

const resourceQuotaV1SpecScopeSelector: resourceQuotaV1.ResourceQuotaV1SpecScopeSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector.property.matchExpression">matchExpression</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>[]</code> | match_expression block. |

---

##### `matchExpression`<sup>Optional</sup> <a name="matchExpression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector.property.matchExpression"></a>

```typescript
public readonly matchExpression: IResolvable | ResourceQuotaV1SpecScopeSelectorMatchExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>[]

match_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#match_expression ResourceQuotaV1#match_expression}

---

### ResourceQuotaV1SpecScopeSelectorMatchExpression <a name="ResourceQuotaV1SpecScopeSelectorMatchExpression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

const resourceQuotaV1SpecScopeSelectorMatchExpression: resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.operator">operator</a></code> | <code>string</code> | Represents a scope's relationship to a set of values. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.scopeName">scopeName</a></code> | <code>string</code> | The name of the scope that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.values">values</a></code> | <code>string[]</code> | A list of scope selector requirements by scope of the resources. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Represents a scope's relationship to a set of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#operator ResourceQuotaV1#operator}

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.scopeName"></a>

```typescript
public readonly scopeName: string;
```

- *Type:* string

The name of the scope that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#scope_name ResourceQuotaV1#scope_name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

A list of scope selector requirements by scope of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#values ResourceQuotaV1#values}

---

### ResourceQuotaV1Timeouts <a name="ResourceQuotaV1Timeouts" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

const resourceQuotaV1Timeouts: resourceQuotaV1.ResourceQuotaV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#create ResourceQuotaV1#create}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#update ResourceQuotaV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#create ResourceQuotaV1#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.1/docs/resources/resource_quota_v1#update ResourceQuotaV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceQuotaV1MetadataOutputReference <a name="ResourceQuotaV1MetadataOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

new resourceQuotaV1.ResourceQuotaV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceQuotaV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Metadata">ResourceQuotaV1Metadata</a>

---


### ResourceQuotaV1SpecOutputReference <a name="ResourceQuotaV1SpecOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

new resourceQuotaV1.ResourceQuotaV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.putScopeSelector">putScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetHard">resetHard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopeSelector">resetScopeSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScopeSelector` <a name="putScopeSelector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.putScopeSelector"></a>

```typescript
public putScopeSelector(value: ResourceQuotaV1SpecScopeSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.putScopeSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

---

##### `resetHard` <a name="resetHard" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetHard"></a>

```typescript
public resetHard(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetScopeSelector` <a name="resetScopeSelector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.resetScopeSelector"></a>

```typescript
public resetScopeSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelector">scopeSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference">ResourceQuotaV1SpecScopeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hardInput">hardInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelectorInput">scopeSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hard">hard</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeSelector`<sup>Required</sup> <a name="scopeSelector" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelector"></a>

```typescript
public readonly scopeSelector: ResourceQuotaV1SpecScopeSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference">ResourceQuotaV1SpecScopeSelectorOutputReference</a>

---

##### `hardInput`<sup>Optional</sup> <a name="hardInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hardInput"></a>

```typescript
public readonly hardInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `scopeSelectorInput`<sup>Optional</sup> <a name="scopeSelectorInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopeSelectorInput"></a>

```typescript
public readonly scopeSelectorInput: ResourceQuotaV1SpecScopeSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.hard"></a>

```typescript
public readonly hard: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceQuotaV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Spec">ResourceQuotaV1Spec</a>

---


### ResourceQuotaV1SpecScopeSelectorMatchExpressionList <a name="ResourceQuotaV1SpecScopeSelectorMatchExpressionList" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

new resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.get"></a>

```typescript
public get(index: number): ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceQuotaV1SpecScopeSelectorMatchExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>[]

---


### ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference <a name="ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

new resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput">scopeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeName">scopeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `scopeNameInput`<sup>Optional</sup> <a name="scopeNameInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput"></a>

```typescript
public readonly scopeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.scopeName"></a>

```typescript
public readonly scopeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceQuotaV1SpecScopeSelectorMatchExpression;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>

---


### ResourceQuotaV1SpecScopeSelectorOutputReference <a name="ResourceQuotaV1SpecScopeSelectorOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

new resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.putMatchExpression">putMatchExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resetMatchExpression">resetMatchExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpression` <a name="putMatchExpression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.putMatchExpression"></a>

```typescript
public putMatchExpression(value: IResolvable | ResourceQuotaV1SpecScopeSelectorMatchExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.putMatchExpression.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>[]

---

##### `resetMatchExpression` <a name="resetMatchExpression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.resetMatchExpression"></a>

```typescript
public resetMatchExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpression">matchExpression</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList">ResourceQuotaV1SpecScopeSelectorMatchExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpressionInput">matchExpressionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpression`<sup>Required</sup> <a name="matchExpression" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpression"></a>

```typescript
public readonly matchExpression: ResourceQuotaV1SpecScopeSelectorMatchExpressionList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpressionList">ResourceQuotaV1SpecScopeSelectorMatchExpressionList</a>

---

##### `matchExpressionInput`<sup>Optional</sup> <a name="matchExpressionInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.matchExpressionInput"></a>

```typescript
public readonly matchExpressionInput: IResolvable | ResourceQuotaV1SpecScopeSelectorMatchExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorMatchExpression">ResourceQuotaV1SpecScopeSelectorMatchExpression</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceQuotaV1SpecScopeSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1SpecScopeSelector">ResourceQuotaV1SpecScopeSelector</a>

---


### ResourceQuotaV1TimeoutsOutputReference <a name="ResourceQuotaV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceQuotaV1 } from '@cdktf/provider-kubernetes'

new resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ResourceQuotaV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.resourceQuotaV1.ResourceQuotaV1Timeouts">ResourceQuotaV1Timeouts</a>

---



